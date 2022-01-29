# CafeMap
![image](https://user-images.githubusercontent.com/64072136/151642710-52376ba5-2ce6-4352-9389-6683fd46be66.png)

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
- /cafe/:id (get): 카페 자세히보기  (미사용)
- /cafe/search/:name (get): 카페 검색
- /cafe (post): 카페 등록
- /img/:img (get) : 사진 보기
- /img/upload (post) : 이미지 1개 업로드 (미사용)
- /img/uploads (post) : 이미지 1~4개 업로드

## 구조
![image](https://user-images.githubusercontent.com/64072136/151556396-d28e68da-1892-4fa0-996a-8f529d1be6a4.png)


## 주요 기능
- 카페 등록
- 등록한 카페 Map에 marker
- 카페 검색

## 에러
- 이미지 업로드시 브라우저 자동 새로고침,,
