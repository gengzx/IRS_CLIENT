<style>

.explore-marketing-header {
    margin: 10px auto 0px;
    text-align: center;
}

.exploregrid {
    width: 900px
}

.exploregrid-item {
    float: left;
    width: 420px;
    height: 110px;
    padding: 20px;
    margin: 15px;
    font-size: 14px;
    color: #555;
    border: 1px solid rgba(0,0,0,0.075);
    border-bottom-color: rgba(0,0,0,0.125);
    border-radius: 4px;
    -webkit-transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

.exploregrid-item-header {
    height: 20px;
    margin: -21px -21px 20px;
    background-color: #f5f5f5;
    border: 1px solid rgba(0,0,0,0.1);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    opacity: 0.8;
    -webkit-transition: opacity 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzQiIGhlaWdodD0iMTU0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2IoNjEsIDkwLCAxOTkpIiAgLz48cmVjdCB4PSItMTQuMTY2NjY2NjY2NjY2NjY2IiB5PSItMTQuMTY2NjY2NjY2NjY2NjY2IiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjEwNjY2NjY2NjY2NjY2NjY3IiBzdHJva2Utd2lkdGg9IjEiICAvPjxyZWN0IHg9IjExOS45MDgxMDYyMTQ0NTE1MSIgeT0iLTE0LjE2NjY2NjY2NjY2NjY2NiIgd2lkdGg9IjI4LjMzMzMzMzMzMzMzMzMzMiIgaGVpZ2h0PSIyOC4zMzMzMzMzMzMzMzMzMzIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiAgLz48cmVjdCB4PSItMTQuMTY2NjY2NjY2NjY2NjY2IiB5PSIxNDAuNjQ5NTQ1NzYyMjM2NCIgd2lkdGg9IjI4LjMzMzMzMzMzMzMzMzMzMiIgaGVpZ2h0PSIyOC4zMzMzMzMzMzMzMzMzMzIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiNkZGQiIGZpbGwtb3BhY2l0eT0iMC4xMDY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiAgLz48cmVjdCB4PSIxMTkuOTA4MTA2MjE0NDUxNTEiIHk9IjE0MC42NDk1NDU3NjIyMzY0IiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjEwNjY2NjY2NjY2NjY2NjY3IiBzdHJva2Utd2lkdGg9IjEiICAvPjxyZWN0IHg9IjUyLjg3MDcxOTc3Mzg5MjQyNSIgeT0iMjQuNTM3Mzg2NDQwNTU5MDkzIiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiICAvPjxyZWN0IHg9Ii0xNC4xNjY2NjY2NjY2NjY2NjYiIHk9IjYzLjI0MTQzOTU0Nzc4NDg2IiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjE0MTMzMzMzMzMzMzMzMzM0IiBzdHJva2Utd2lkdGg9IjEiICAvPjxyZWN0IHg9IjExOS45MDgxMDYyMTQ0NTE1MSIgeT0iNjMuMjQxNDM5NTQ3Nzg0ODYiIHdpZHRoPSIyOC4zMzMzMzMzMzMzMzMzMzIiIGhlaWdodD0iMjguMzMzMzMzMzMzMzMzMzMyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgIC8+PHJlY3QgeD0iNTIuODcwNzE5NzczODkyNDI1IiB5PSIxMDEuOTQ1NDkyNjU1MDEwNjEiIHdpZHRoPSIyOC4zMzMzMzMzMzMzMzMzMzIiIGhlaWdodD0iMjguMzMzMzMzMzMzMzMzMzMyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDU0NjY2NjY2NjY2NjY2NjciIHN0cm9rZS13aWR0aD0iMSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjE2NjY2NjY2NjY2NjY2NiwgLTE0LjE2NjY2NjY2NjY2NjY2Nikgcm90YXRlKDAsIDE0LjE2NjY2NjY2NjY2NjY2NiwgMTIuMjY4NjkzMjIwMjc5NTQ2KSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjA1NDY2NjY2NjY2NjY2NjY3IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjE2NjY2NjY2NjY2NjY2NiwgMTY4Ljk4Mjg3OTA5NTU2OTcpIHJvdGF0ZSgwLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDEyLjI2ODY5MzIyMDI3OTU0Nikgc2NhbGUoMSwgLTEpIiAgLz48cG9seWxpbmUgcG9pbnRzPSIwLCAwLCAyNC41MzczODY0NDA1NTkwOTMsIDE0LjE2NjY2NjY2NjY2NjY2NiwgMCwgMjguMzMzMzMzMzMzMzMzMzMyLCAwLCAwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE5LjkwODEwNjIxNDQ1MTUxLCAtMTQuMTY2NjY2NjY2NjY2NjY2KSByb3RhdGUoMCwgMTQuMTY2NjY2NjY2NjY2NjY2LCAxMi4yNjg2OTMyMjAyNzk1NDYpIHNjYWxlKC0xLCAxKSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjExNTMzMzMzMzMzMzMzMzM0IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExOS45MDgxMDYyMTQ0NTE1MSwgMTY4Ljk4Mjg3OTA5NTU2OTcpIHJvdGF0ZSgwLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDEyLjI2ODY5MzIyMDI3OTU0Nikgc2NhbGUoLTEsIC0xKSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxLjIwNDA1MzEwNzIyNTc2LCAyNC41MzczODY0NDA1NTkwOTMpIiAgLz48cG9seWxpbmUgcG9pbnRzPSIwLCAwLCAyNC41MzczODY0NDA1NTkwOTMsIDE0LjE2NjY2NjY2NjY2NjY2NiwgMCwgMjguMzMzMzMzMzMzMzMzMzMyLCAwLCAwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDU0NjY2NjY2NjY2NjY2NjciIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIuODcwNzE5NzczODkyNDI1LCAyNC41MzczODY0NDA1NTkwOTMpIHNjYWxlKC0xLCAxKSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjA2MzMzMzMzMzMzMzMzMzM0IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxLjIwNDA1MzEwNzIyNTc2LCAxMzAuMjc4ODI1OTg4MzQzOTUpIHNjYWxlKDEsIC0xKSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjA5OCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi44NzA3MTk3NzM4OTI0MjUsIDEzMC4yNzg4MjU5ODgzNDM5NSkgc2NhbGUoLTEsIC0xKSIgIC8+PHBvbHlsaW5lIHBvaW50cz0iMCwgMCwgMjQuNTM3Mzg2NDQwNTU5MDkzLCAxNC4xNjY2NjY2NjY2NjY2NjYsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMiwgMCwgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjEzMjY2NjY2NjY2NjY2NjY1IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjE2NjY2NjY2NjY2NjY2NiwgNjMuMjQxNDM5NTQ3Nzg0ODYpIiAgLz48cG9seWxpbmUgcG9pbnRzPSIwLCAwLCAyNC41MzczODY0NDA1NTkwOTMsIDE0LjE2NjY2NjY2NjY2NjY2NiwgMCwgMjguMzMzMzMzMzMzMzMzMzMyLCAwLCAwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMTQxMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE5LjkwODEwNjIxNDQ1MTUxLCA2My4yNDE0Mzk1NDc3ODQ4Nikgc2NhbGUoLTEsIDEpIiAgLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjAyODY2NjY2NjY2NjY2NjY2NyIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC4xNjY2NjY2NjY2NjY2NjYsIDE0LjE2NjY2NjY2NjY2NjY2Nikgcm90YXRlKC0zMCwgMCwgMCkiICAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyOC4zMzMzMzMzMzMzMzMzMzIiIGhlaWdodD0iMjguMzMzMzMzMzMzMzMzMzMyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMTE1MzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMTkuOTA4MTA2MjE0NDUxNTEsIDE0LjE2NjY2NjY2NjY2NjY2Nikgcm90YXRlKC0zMCwgMCwgMCkiICAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyOC4zMzMzMzMzMzMzMzMzMzIiIGhlaWdodD0iMjguMzMzMzMzMzMzMzMzMzMyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDYzMzMzMzMzMzMzMzMzMzQiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMTY2NjY2NjY2NjY2NjY2LCAzNC45MDgxMDYyMTQ0NTE1Mikgcm90YXRlKDMwLCAwLCAyOC4zMzMzMzMzMzMzMzMzMzIpIiAgLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iI2RkZCIgZmlsbC1vcGFjaXR5PSIwLjE0MTMzMzMzMzMzMzMzMzM0IiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0ic2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTE5LjkwODEwNjIxNDQ1MTUxLCAzNC45MDgxMDYyMTQ0NTE1Mikgcm90YXRlKDMwLCAwLCAyOC4zMzMzMzMzMzMzMzMzMzIpIiAgLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjguMzMzMzMzMzMzMzMzMzMyIiBoZWlnaHQ9IjI4LjMzMzMzMzMzMzMzMzMzMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMC4wMiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIwLjA5OCIgc3Ryb2tlLXdpZHRoPSIxIiB0cmFuc2Zvcm09InNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoMTQuMTY2NjY2NjY2NjY2NjY2LCAtMTE5LjkwODEwNjIxNDQ1MTUyKSByb3RhdGUoMzAsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMikiICAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyOC4zMzMzMzMzMzMzMzMzMzIiIGhlaWdodD0iMjguMzMzMzMzMzMzMzMzMzMyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDM3MzMzMzMzMzMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtMTE5LjkwODEwNjIxNDQ1MTUxLCAtMTE5LjkwODEwNjIxNDQ1MTUyKSByb3RhdGUoMzAsIDAsIDI4LjMzMzMzMzMzMzMzMzMzMikiICAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyOC4zMzMzMzMzMzMzMzMzMzIiIGhlaWdodD0iMjguMzMzMzMzMzMzMzMzMzMyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBmaWxsPSIjZGRkIiBmaWxsLW9wYWNpdHk9IjAuMDU0NjY2NjY2NjY2NjY2NjciIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKDE0LjE2NjY2NjY2NjY2NjY2NiwgLTE0MC42NDk1NDU3NjIyMzY0KSByb3RhdGUoLTMwLCAwLCAwKSIgIC8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjI4LjMzMzMzMzMzMzMzMzMzMiIgaGVpZ2h0PSIyOC4zMzMzMzMzMzMzMzMzMzIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNDYiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtMTE5LjkwODEwNjIxNDQ1MTUxLCAtMTQwLjY0OTU0NTc2MjIzNjQpIHJvdGF0ZSgtMzAsIDAsIDApIiAgLz48L3N2Zz4=);

}

.exploregrid-item-title {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.2;
    color: #333;
}

.exploregrid-item-meta {
  position: relative;
    display: block;
    margin-top: 15px;
    font-size: 13px;
    color: #767676;
}
.exploregrid-item-meta-details {
    margin-right: 10px;
}

.exploregrid-item:hover{
  text-decoration:none;
  border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.15);
  box-shadow:0 1px 3px rgba(0,0,0,0.05),0 8px 15px rgba(0,0,0,0.1)
}
.exploregrid-item:hover .exploregrid-item-title{
  color:#4078c0
}
.exploregrid-item:hover .exploregrid-item-header{
  opacity:1
}

.exploregrid .flag{
  position: absolute;
  right: 10px;
  color: red;
}


.atbar{
  background: #fff;
  padding-bottom: 10px;
  text-align:left;
}

.dataimport-modal,
.datapack-modal{
}
.dataimport-modal{
  height: 385px;
}

.datapack-button{
  display: inline-block;
  margin: 0 auto;
  color: #007fb2;
  border: 1px solid #007fb2;
  height: 32px;
  width: 100px;
  background: #ffffff;
}
.datapack-button:hover{
  background: #c8efff
}
.dataimport-modal .footer,
.datapack-modal .footer{
  min-height: 100px;
  border-top: 1px solid #c2c0c2;
  padding: 15px;
}
.dataimport-modal .footer .form-control,
.datapack-modal .footer .form-control{
  width: 450px;
}
.filecontainer .datapack-button{
  height: 30px;
  width: 80px;

}

.table-list {
    flex: 1;
    margin: 20px;
    overflow: auto;
}
.table-list table {
    border-collapse: collapse;
    border-spacing: 0;
}
.table-list tbody tr {
    position: relative;
    z-index: 1;
    color: #323232;
    font-size: 13px;
    border-bottom: 1px solid #f6f6f6;
    transition: .1s all ease;
}
.table-list tbody tr td {
    color: #8a8a8a;
    padding-right: 15px;
    height: 48px;
}
.table-list tbody tr td.t {

}
.table-list tbody tr td .checkbox {
  display: inline-block;
  margin-left: 10px;
}
.table-list tbody tr td .checkbox input {
    margin-top: -10px;
}

.table-list tbody tr td.c{
    width: 20px;
}

.dataimport-modal .table-info{
  flex: 1;
  margin: 10px 20px 20px 20px;
  overflow: auto;
  height: 400px;
}
.dataimport-modal .table-info .form-group{
  height: 40px;
  vertical-align: middle;
  line-height: 40px;
  width: 200px;
  margin: 0px 50px 0px 50px;
  display: inline-block;
}
.dataimport-modal .table-info .form-group label{
  float: left;
  width: 55px;
  margin-right: 20px;
  color: #a5a3a3;
}
.dataimport-modal .table-info .form-group select,
.dataimport-modal .table-info .form-group span{
  border: 0px;
  border-radius: 0px;
  border-bottom: 2px solid #989698;
  width: 120px;
  text-align: center;
  display: inline-block;
  height: 35px;
}

.swiper-container {
    width: 900px;
    padding-top: 40px;
    padding-bottom: 30px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 150px;
}

.swiper-slide .pname{
  position: relative;
  top: -38px;
  padding: 4px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  border: 1px solid #e2dfdf;
  background: #f1eeee;
  border-radius: 8px;
  text-align: center;
  display: none;
}
.swiper-slide .premove{
  position: absolute;
  cursor:hand;
  top: -16px;
  right: -14px;
  font-size: 20px;
  display: none;
}
.swiper-slide .premove a{
  color: red;
  cursor: pointer;
}
.swiper-slide.swiper-slide-active .pname{
  display: block!important;
}
.swiper-slide.swiper-slide-active .premove{
  display: block!important;
}

.message{
  padding: 7px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
  width: 80%;
  text-align: center;
  margin: 8px auto;
}

.modal-layer{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(55, 55, 55, 0.6);
  z-index: 1;
  visibility: hidden;
  transition: visibility 0s .22s linear , opacity .22s ease-in;
}
.modal-layer-visible {
  pointer-events: auto!important;
  visibility: visible!important;
  opacity: 1!important;
  transition: visibility 0s 0s linear , opacity .34s ease-out;
}

.header-tab{
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  line-height: 46px;
  font-size: 16px;
  font-weight: bold;
  font-family: Lato, -apple-system, BlinkMacSystemFont, "Microsoft YaHei", SimSun, sans-serif;
  width: 160px;
  margin:0 auto;
}
.header-tab li{
  height: 50px;
  line-height: 50px;
  min-width: 72px;
  text-align: center;
  border-bottom-width: 3px;
  position: relative;
  top: 1px;
  float: left;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.header-tab li.selected,
.header-tab li:hover{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
.header-tab li span{
    cursor: pointer;
}
</style>
<template>

<div class="container">
  <div class="explore-marketing-header">
    <ul class="header-tab">
      <li :class="{ selected: tabtype == '填报' }" @click="changeTag('填报')"><span>数据填报</span></li>
      <li :class="{ selected: tabtype == '导入' }" @click="changeTag('导入')"><span>数据导入</span></li>
    </ul>

    <!-- <p class="lead"></p> -->

    <div class="tbar atbar toolbar-actions" style="clear:both;">

      <button class="btn btn-positive" v-on:click="startModal" v-show="tabtype == '填报'">
        <span class="icon icon-home icon-text white"></span>
        设置
      </button>

      <div class="pull-right">
        <button class="btn btn-positive" @click="toggerDataimport" v-show="tabtype != '填报'">
          <span class="icon icon-download icon-text white"></span>
          数据导入
        </button>
        <button class="btn btn-negative" @click="mergeImpData" v-show="tabtype != '填报'">
          <span class="icon icon-arrows-ccw icon-text white"></span>
          数据合并
        </button>

        <button class="btn btn-positive" @click="toggerDatapack" v-show="tabtype == '填报'">
          <span class="icon icon-export icon-text white"></span>
          数据打包
        </button>
      </div>

    </div>


  </div>

  <div>

    <h3 v-show="isshow.table">数据表</h3>
    <div class="exploregrid">

      <a v-for="item in items" v-link="{ path: item.path }" class="exploregrid-item">
        <div class="exploregrid-item-header" style="==);"></div>
        <h3 class="exploregrid-item-title" v-text="($index+1)+'、'+item.title"></h3>
        <div class="exploregrid-item-meta">
            <!-- <span class="exploregrid-item-meta-details">
              <span class="icon icon-export icon-text"></span>
              按省份
            </span>
            <span class="exploregrid-item-meta-details">
              <span class="icon icon-export icon-text"></span>
              按矿种
            </span> -->
            <span v-if="item.isdata" class="flag">
              <span class="icon icon-check"></span>
            </span>
        </div>
      </a>

    </div>

    <div class="filecontainer" v-show="isshow.report">
      <h3>报告 <button @click="fileBrowse('report')" class="btn datapack-button" style="margin-left:20px;">浏览...</button></h3>
      <table class="table-striped">
        <thead>
          <tr>
            <th>名称</th><th>路径</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in data.report">
            <td v-text="r.name" class="name"></td>
            <td v-text="r.path"></td>
            <td class="setup"><a href="javascript:;" class="icon icon-cancel-circled icon-text" @click="removeFile('report',$index)"></a></td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="filecontainer" v-show="isshow.photo">
      <h3>图件 <button @click="fileBrowse('photo')" class="btn datapack-button" style="margin-left:20px;">浏览...</button></h3>


      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="r in data.photo" class="swiper-slide" :style="{ backgroundImage: 'url(' + r.path + ')' }" @click="openImage(r.path)">
              <span class="pname" v-text="r.name"></span>
              <span class="premove"><a href="javascript:;" class="icon icon-cancel-circled icon-text" @click="removeFile('photo',$index)"></a></span>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

    </div>


    <div class="filecontainer" v-show="isshow.file">
      <h3>附件 <button @click="fileBrowse('file')" class="btn datapack-button" style="margin-left:20px;">浏览...</button></h3>
      <table class="table-striped">
        <thead>
          <tr>
            <th>名称</th><th>路径</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in data.file">
            <td v-text="r.name" class="name"></td>
            <td v-text="r.path"></td>
            <td class="setup"><a href="javascript:;" class="icon icon-cancel-circled icon-text" @click="removeFile('file',$index)"></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="filecontainer"></div>

  </div>

  <div class="datapack-modal g-modal">

    <div class="container-row">
      <div class="table-list">
        <h4 v-show="isshow.table">数据表</h4>
        <table width="100%">

          <tbody>
            <tr v-for="item in items" class="animation animation-delay-1" style="display: table-row;">
              <td class="t" v-text="item.title"></td>
              <td :name="item.name" :index="$index" class="c">
                <div class="checkbox"><label><input type="checkbox" checked name="DEF"></label></div>
                <!-- <div class="checkbox"><label><input type="checkbox" checked name="SF">省份</label></div>
                <div class="checkbox"><label><input type="checkbox" checked name="KZ">矿种</label></div> -->
              </td>
            </tr>
          </tbody>

        </table>

        <h4>附件</h4>
        <div v-show="isshow.report">
          <h6 style="margin-left:13px;">报告</h6>
          <table width="100%">
            <tbody>
              <tr v-for="d in data.report" class="animation animation-delay-1" style="display: table-row;">
                <td class="t" v-text="d.name"></td>
                <td :name="d.name" :index="$index" type="report" class="c">
                  <div class="checkbox"><label><input type="checkbox" checked name="DEF"></label></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-show="isshow.photo">
          <h6 style="margin-left:13px;">图件</h6>
          <table width="100%">
            <tbody>
              <tr v-for="d in data.photo" class="animation animation-delay-1" style="display: table-row;">
                <td class="t" v-text="d.name"></td>
                <td :name="d.name" :index="$index" type="photo" class="c">
                  <div class="checkbox"><label><input type="checkbox" checked name="DEF"></label></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-show="isshow.file">
          <h6 style="margin-left:13px;">附件</h6>
          <table width="100%">
            <tbody>
              <tr v-for="d in data.file" class="animation animation-delay-1" style="display: table-row;">
                <td class="t" v-text="d.name"></td>
                <td :name="d.name" :index="$index" type="file" class="c">
                  <div class="checkbox"><label><input type="checkbox" checked name="DEF"></label></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <footer class="footer">
        <div class="form-group" style="height: 40px;vertical-align: middle;line-height: 40px;">
          <label style="float: left;margin-right: 20px;">填&nbsp; 报&nbsp;人<strong style="color: red">*</strong></label>
          <input type="text" class="form-control" id="fillperson" placeholder="填报人">
        </div>
        <div class="form-group" style="height: 40px;vertical-align: middle;line-height: 40px;">
          <label style="float: left;margin-right: 20px;">审&nbsp; 核&nbsp;人<strong style="color: red">*</strong></label>
          <input type="text" class="form-control" id="reviewer" placeholder="审核人">
        </div>
        <div class="form-group" style="height: 55px;vertical-align: middle;line-height: 55px;">
          <label style="float: left;margin-right: 20px;">填报说明<strong style="color: red">*</strong></label>
          <textarea type="text" class="form-control" style="resize: none;" id="comment" placeholder="填报说明" rows="2"></textarea>
        </div>
        <div>
          <label style="float: left;margin-right: 20px;">打包路径<strong style="color: red">*</strong></label>
          <input class="form-control" id="savepath" type="text" readonly placeholder="打包路径">
          <button @click="savePath" class="btn datapack-button pull-right">浏览...</button>
        </div>
        <div class="actions">
          <button class="btn btn-link" v-on:click="toggerDatapack">
            取 消
          </button>
          <button class="btn" v-on:click="datapack">
            确 定
          </button>
        </div>
      </footer>

    </div>


  </div>


  <div class="dataimport-modal g-modal">

    <div class="container-row">

      <div class="table-info">
        <h4>数据信息</h4>

        <div class="form-group">
          <label>数据类型</label>
          <span>{{info.type}}</span>
        </div>
        <div class="form-group">
          <label>单位</label>
          <span>{{info.company}}</span>
        </div>
        <div class="form-group">
          <label>年份</label>
          <span>{{info.year}}</span>
        </div>
        <div class="form-group">
          <label>填报人</label>
          <span>{{info.informant}}</span>
        </div>

        <div class="message" v-show="dataImportMsg">
          <span>提示信息 <span v-text="dataImportMsg"></span> </span>
        </div>

      </div>

      <footer class="footer">

        <div class="form-group">
          <label style="float: left;margin-right: 20px;margin-top: 5px;"> 分 公 司 <strong style="color: red">*</strong></label>

          <select class="form-control" style="padding-top:7px;padding-bottom:7px;" id="datafgs">
            <option v-for="option in FGS" v-bind:value="option" v-text="option"></option>
          </select>

        </div>
        <div>
          <label style="float: left;margin-right: 20px;margin-top: 5px;">文件路径<strong style="color: red">*</strong></label>
          <input class="form-control" id="openpath" type="text" readonly placeholder="文件路径">
          <button @click="openPath" class="btn datapack-button pull-right">浏览...</button>
        </div>

        <!-- <div class="radio">
          <label>
            <input type="radio" name="radios" checked> 合并
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="radios"> 覆盖
          </label>
        </div> -->

        <div class="actions">
          <button class="btn btn-link" v-on:click="toggerDataimport">
            取 消
          </button>
          <button class="btn" v-on:click="dataImport">
            确 定
          </button>
        </div>
      </footer>

    </div>


  </div>

  <div class="modal-layer"></div>


</div>


</template>

<script>
const db = require('../script/db')('html5')
const ipc = require('electron').ipcRenderer
import { FGS } from 'Db/datas'

const params = {tbname:"FILES",type:"DEF"}

export default {
  data () {
    return {
      tabtype:this.$parent.tabtype ? this.$parent.tabtype : '填报',
      items:[],
      FGS:[],
      data:{
        file:[],
        report:[],
        photo:[]
      },
      info:{},
      dataImportMsg:'',

      isshow:{}
    }
  },
  ready:function(){

    if(DATATYPE == '年报'){
      this.isshow = { table:true, report:true, photo:true, file:true }
    } else if(DATATYPE == '快报'){
      this.isshow = { table:true, file:true }
    } else if(DATATYPE == '季报'){
      this.isshow = { table:true, report:true, file:true }
    } else if(DATATYPE == '月报'){
      this.isshow = { file:true }
    } else if(DATATYPE == '专报'){
      this.isshow = { report:true, file:true }
    } else if(DATATYPE == '其他'){
      this.isshow = { report:true, photo:true, file:true }
    }

    this.initData()
  },
  watch:{
    'data.photo': function (val, oldVal) {
      setTimeout(function(){
        initSwiper()
      },200)
    }
  },
  methods: {
    initData:function(){
      params.type = "DEF"
      if(DATATYPE == '季报'){ params.type = DATASEASON }
      if(DATATYPE == '月报'){ params.type = DATAMONTH }
      this.FGS = FGS[DATACOM]

      let storage = db.queryAll()

      this.items = []
      var aroutes = this.tabtype == '填报' ? routes : routes_imp
      for(let path in aroutes){
        if(path == '/home') continue
        const route = aroutes[path]
        if(route.type != DATATYPE) continue


        var isdata = storage[db.getStorageKey(route.name)]
        if(isdata){
          isdata = JSON.parse(isdata)[params.type]
          isdata = isdata.length > 0 ? isdata : null
        }

        this.items.push({
          title: route.cname,
          name: route.name,
          tbname: route.tbname,
          tabtype: route.tabtype,
          isdata:(isdata != null),
          path:path
        })

      }

      let thisz = this
      commonVue.methods.query(this, params, function(rows,isinit){
        if(!isinit){
          thisz.data  = rows
        }else{
          thisz.data  = {file:[],report:[],photo:[]}
        }
      })

    },
    toggerDatapack: function(){
      common.queryElement('.modal-layer').classList.toggle('modal-layer-visible')
      common.queryElement('.datapack-modal').classList.toggle('visible')
    },
    toggerDataimport: function(){
      common.queryElement('.modal-layer').classList.toggle('modal-layer-visible')
      common.queryElement('.dataimport-modal').classList.toggle('visible')
    },
    // 文件操作
    fileBrowse: function(type){

      const type_cn = {
        report:"报告",
        photo:"图件",
        file:"附件",
      }

      var thisz = this;
      ipc.send('open-dialog')
      ipc.once('opened-file', function (event, path) {
        if(path) {
          path+="";
          var name = path.substr(path.lastIndexOf("\\") + 1)
          /*
          thisz.data[type].push({
            name: name,
            type: type_cn[type],
            path: path
          })*/
          thisz.data[type].splice(0, 0, {
            name: name,
            type: type_cn[type],
            path: path.replace(/\\/g,'/')
          });

          commonVue.methods.save(thisz, params)
        }
      })

    },
    removeFile: function(type,idx){
      this.data[type].splice(idx, 1);
      commonVue.methods.save(this, params)
      event.stopPropagation()
    },
    savePath: function(){
      commonVue.savePath(function(path){
        common.queryElement('#savepath').value = path
      })
    },
    openPath: function(){
      const thisz = this
      commonVue.openPath(function(path,ainfo){
        common.queryElement('#openpath').value = path
        const _info = ainfo.Baseinfo[0]
        let info = {}
        info.year = _info.YEAR[0]
        info.company = _info.COMPANY[0]
        info.type = _info.TYPE[0]
        info.informant = _info.INFORMANT[0]
        thisz.info = info

        let msg = ''
        if(info.type != DATATYPE){
          msg = "[数据类型]不一致"
        }
        if(info.company != DATACOM){
          if(msg) msg += "、"
          msg += "[填报单位]不一致"
        }
        thisz.dataImportMsg = msg

      })
    },
    openImage: function(path){
      ipc.send('open-window',path)
    },
    datapack: function(){

      let thisz = this,
          path = common.queryElement('#savepath').value,
          tables = {},
          fillperson = common.queryElement('#fillperson').value,
          comment = common.queryElement('#comment').value,
          reviewer = common.queryElement('#reviewer').value,
          files = []

      if(path){

        let checkeds = document.querySelectorAll('.datapack-modal input[checked]')
        checkeds.forEach(function (check) {
          if(check.checked){
            let type = check.parentNode.parentNode.parentNode.getAttribute("type")
            let index = check.parentNode.parentNode.parentNode.getAttribute("index")
            if(type){
              files.push(thisz.data[type][index]);
            }else{
              //let tname = check.parentNode.parentNode.parentNode.getAttribute("name")
              const item = thisz.items[index];
              let tname = item.name
              if(!tables[tname]) tables[tname] = []
              tables[tname].push({name:item.name,tbname:item.tbname,cname:item.title})
            }

          }
        })

        commonVue.dataPack(tables, files, path, fillperson, comment,reviewer)
      }

    },
    dataImport: function(){

      if(this.dataImportMsg) return

      const thisz = this,
            path = common.queryElement('#openpath').value,
            fgs = common.queryElement('#datafgs').value

      commonVue.dataImport(path, fgs)

    },
    mergeImpData: function(){

       if(confirm("你确定合并数据替换当前正式数据吗？")){

         const tables = this.items

         commonVue.mergeImpData(tables)
       }

    },
    startModal: function (){
      this.$parent.toggerModal()
    },
    changeTag: function(tagName){
      this.$parent.tabtype = this.tabtype = tagName
      this.initData();

      if(tagName == '填报'){
        this.$parent.routes = routes
      }else{
        this.$parent.routes = routes_imp
      }

    }
  },
  route: {
  }

}

function initSwiper(){
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }
  });
}
</script>
