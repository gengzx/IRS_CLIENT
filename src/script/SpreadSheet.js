/**
 * 电子表格
 */

function SpreadSheet(id, option, vueCom) {

  var params = this.parseColumns(option.columns);

  this.headers = params.headers;

  this.vueCom = vueCom;

  var sheet = null,
      thisz = this,
      columns = params.columns,
      henderSize = params.headers.length;

  // if(option.summary) { henderSize += 1; }

  var container = document.getElementById(id);
  this.sheet = sheet = new Handsontable(container, {
    data: params.headers,
    //autoColumnSize:true,
    //rowHeaders: true,
    //colHeaders: true,
    autoWrapRow:true,
    autoWrapCol:true,
    rowHeights: 30,
    stretchH:'all',
    // fixedRowsTop: 2,
    // colWidths:['*',0.1],
    columns: columns,
    readOnlyCellClassName:'sheet-readonly',
    //contextMenu: ['row_above', 'row_below', 'remove_row', '---------', 'undo', 'redo'],
    afterBeginEditing: function(row, column){
      vueCom.$dispatch('sheet.afterBeginEditing', row, column);
    },
    afterChange: function(changes, source){
      if(changes) {

        changes.forEach(function(change, idx){

          var row = change[0];
          var field = change[1];
          var val = change[3];
          var col = params.colIndex[field];

          // 公式计算
          var compute = params.compute;
          if(compute && !compute[field]){
            var reocrd = this.getSourceDataAtRow(row);
            for (var key in compute) {
              var c = compute[key];
              this.setDataAtCell(row, c.tagCol, eval(thisz.parseExpr(c.compute,reocrd)) || '');
            }
          }
          // 求和
          if(option.summary){
            var sumRow = henderSize + 1,colSum = 0,colArray  = this.getDataAtCol(col);
            if(henderSize != row){
              for (var i = sumRow; i < colArray.length; i++) {
                var num = colArray[i];
                if(num && !isNaN(num)){
                  colSum += num;
                }
              }
              this.setDataAtCell(henderSize, col, colSum);
            }
          }

          vueCom.$dispatch('sheet.afterChange', row, col, field, val, source);

        },this);

      }
    },
    cells: function (row, col, prop) {

      var colprop = columns[col];
      // 表头只读
      if(row < henderSize){
        this.readOnly = true;
        this.renderer = 'html';
        if(thisz.sheet){
          thisz.setCellClass(row, col,'center');
        }
      }

    },
    mergeCells: params.merge
  });

  if(option.contextMenu == true){
    sheet.updateSettings({
      contextMenu: {
        /*
        callback: function (key, options) {
          if (key === 'before_ins') {
            vueCom.data.splice(sheet.getSelected()[0] - 1, 0, [{}]);
          } else if (key === 'after_ins') {
            vueCom.data.splice(sheet.getSelected()[2], 0, [{}]);
          } else if (key === 'aremove_row') {
            vueCom.data.splice(sheet.getSelected()[0] - 1, 1);
          }
        },*/
        items: {
          'row_above': {
            name:'前插入行',
            disabled: function () {
              return (sheet.getSelected() && sheet.getSelected()[0] === 0);
            }
          },
          'row_below': {
            name:'后插入行',
            disabled: function () {
              return (sheet.getSelected() && sheet.getSelected()[0] === 0);
            }
          },
          'hsep1': '---------',
          'remove_row': {
            name:'删除行',
            disabled: function () {
              return  (sheet.getSelected() && sheet.getSelected()[0] === 0);
            }
          }
        }
      }
    });
  }


};

/**
 * 解析列参数
 * @param  {[type]} __columns [description]
 * @return {[type]}           [description]
 */
SpreadSheet.prototype.parseColumns = function(__columns){

  var thisz = this;
  var _columns = JSON.parse(JSON.stringify(__columns));

  var columns = [],
      headers = [{}],
      merge = [],
      compute = {},
      colIndex = {};

  function getAttribute(shw, row, col){
      if(typeof(shw) == 'string'){
          shw = {text:shw};
      };
      merge.push({row: row, col: col, rowspan: shw.rowspan ? shw.rowspan : 1, colspan: shw.colspan ? shw.colspan : 1});
      return shw;
  }

  function _addClass(column, className){
    if(!column.className)  column.className = ''
    column.className += ' ' + className
  }

  for(var i = 0; i < _columns.length; i++){
      var _column = _columns[i],
          tag = _column.tag;

      colIndex[tag] = i;
      var column = {}
      if(tag) column.data = tag
      if(_column.type) column.type = _column.type
      if(_column.format) column.format = _column.format
      if(_column.hidden) _addClass(column, 'hidden')
      if(_column.align) _addClass(column, _column.align)
      if(_column.readOnly) column.readOnly = _column.readOnly
      if(_column.renderer) {
        var rendererName = _column.renderer;
        column.renderer = function(instance, td, row, col, prop, value, cellProperties){
          thisz.vueCom.$dispatch(rendererName, instance, td, row, col, prop, value, cellProperties);
          Handsontable.renderers.TextRenderer.apply(this, arguments);
        };
      }
      if(_column.compute) {
        compute[tag] = {compute:_column.compute,tagCol:i};
      }

      if(_column.editor) {
        if(_column.editor.type == 'select'){
          column.type = 'dropdown';
          column.allowInvalid = true;
          column.source = _column.editor.data;
        }
        if(_column.editor.type == 'date'){
          column.type = 'date';
          column.correctFormat = true;
          column.dateFormat = 'YYYY-MM-DD';
        }
      }

      var shw = _column.shw;
      if(shw.constructor == Object || shw.constructor == String){
          headers[0][tag] = getAttribute(shw,0,i).text;
      }
      if(shw.constructor == Array){
          for(var r = 0; r < shw.length; r++){
              var _shw = shw[r];

              if(!headers[r]) headers[r] = {};
              if(_shw) headers[r][tag] = getAttribute(_shw, r, i).text;
          }
      }

      columns.push(column)
  }

  return {
    columns: columns,
    headers: headers,
    merge: merge,
    compute: compute,
    colIndex: colIndex
  };

};
/**
 * 设置单元格 className
 * @param {[type]} row       [description]
 * @param {[type]} col       [description]
 * @param {[type]} className [description]
 */
SpreadSheet.prototype.setCellClass = function(row, col, className){
  var cell = this.sheet.getCell(row, col);
  if(cell){
    cell.classList.add(className);
  }
};

/**
 * 加载本地数据
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
SpreadSheet.prototype.loadData = function(data){
  this.sheet.loadData( this.headers.concat(data) );
};

/**
 * 获取数据
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
SpreadSheet.prototype.getData = function(){

  var data = this.sheet.getSourceData();
  if(!this.isInitData){
    data.splice(0, this.headers.length);
    this.isInitData = true;
  }
  return data;
};

/**
 * 添加行
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
SpreadSheet.prototype.addRow = function(data){
  this.sheet.alter('insert_row', this.sheet.getData().length);
};

/**
 * 解析表达式
 * @param  {[type]} tStr    表达式
 * @param  {[type]} dataObj json数据
 * @param  {[type]} regexp  [description]
 * @return {[type]}         [description]
 */
SpreadSheet.prototype.parseExpr = function(tStr,dataObj,regexp){
  tStr = typeof(tStr) == "object" ? tStr.join('') : tStr;

  return tStr.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
      return (dataObj[name] === undefined) ? ((typeof (dataObj ) == "string") ? dataObj : 0 ): dataObj[name] || 0;
  });
};



module.exports = SpreadSheet;
