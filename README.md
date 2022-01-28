# CafeMap
## 사용환경
- vscode: 1.63.2
- node: 16.13.1
- MongoDB: 5.0.5
- bootstrap: 5.1.3
- 카카오 맵 api

## 실행 방법
- git clone ~~ . 깃을 받아옵니다.
- 클론 폴더로 이동
- 터미널에 'npm instal bcrypt express cors dotenv mongoose multer body-parser path fs' 입력
- view -> index.html 64번 script에있는 appkey= 뒤에 본인 카카오 맵 key 입력
- 터미널 'npm start' 입력해서 서버 실행 후 view 폴더에 index 페이지 실행

## api 명세
- /cafe (get): 카페 리스트 가져오기
- /cafe/:id (get): 카페 자세히보기
- /cafe/search/:name (get): 카페 검색
- /cafe (post): 카페 등록
- /img/:img (get) : 사진 보기
- /img/upload (post) : 이미지 1개 업로드
- /img/uploads (post) : 이미지 1~4개 업로드
