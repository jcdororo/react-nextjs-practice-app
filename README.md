# 목표

기술 | Stacks | 달성률
--|:--:|--:
**<a href="#Language">Language</a>** | Typescript | 50%
**<a href="#DB">DB</a>** | Mongodb on Docker | 100%
**<a href="#클라이언트">클라이언트</a>** | ReactJS | 100%
**<a href="#서버">서버</a>** | NextJS | 100%
**<a href="#상태관리">상태관리</a>** | Recoil | 0%
**<a href="#CSS">CSS</a>** | Tailwind CSS | 30%
**<a href="#배포">배포</a>** | Vercel | 0%






## <div id="Language">Typescript를 사용한 이유</div>
```
->
```

## <div id="DB">Mongodb on Docker를 사용한 이유</div>
```
-> 
관계형 데이터베이스 의 유연성
```
# Docker

## 명령어
### 이미지 pull   
```
$ docker pull [이미지 이름]
```

### 이미지 확인
```
$ docker images
```

### 도커 이미지 시작
```
$ docker start [컨테이너 이름 혹은 아이디]
```

### 도커 이미지 중지
```
$ docker stop [컨테이너 이름 혹은 아이디]
```

### 컨테이너 bash 접속
```
$ docker exec -it [컨테이너 이름] bash
```

### 실행중인 컨테이너 확인
```
$ docker ps
```

### 종료된 컨테이너까지 확인
```
$ docker ps -a
```

### 컨테이너 삭제
```
$ docker rm [컨테이너 ID]
```

### 이미지 삭제
```
$ docker rmi [이미지 ID]
```

### 몽고db 실행 on docker
```
docker run -d --name next-mongo -p 27017:27017 -e MONGO_URI=mongodb://localhost:27017 mongo   
```

"mongodb://localhost:27017"를 사용할 수 있다.
----
## <div id="클라이언트">ReactJS를 사용한 이유</div>
```
-> 
```
## <div id="서버">NextJS를 사용한 이유</div>
```
-> 
```
## <div id="상태관리">Recoil을 사용한 이유</div>
```
-> 
[React Context API, Redux(Reducer + flux), Recoil]
1. props drilling을 해결해야 한다.
2. 공식문서가 잘되어있어야한다.
3. 간단해야한다.
```
## <div id="CSS">Tailwind CSS를 사용한 이유</div>
```
-> 
```
## <div id="배포">Vercel을 사용한 이유</div>
```
-> 
```

# 의문 ?

## 함수형컴포넌트와 클래스 컴포넌트의 차이 ?
```
->
```


## 이슈
```
타입스크립트 설치 후 Module not found: Can't resolve '라이브러리명' 현상
-> 
1. 아래의 파일 및 폴더를 삭제한다.

[File] package-lock.json

[Directory] node_modules 

2. 아래의 명령어를 사용하여 모듈들을 재설치해준다.

[Command] npm install

그럼에도 불구하고 안된다면,


3. tsconfig.json에 아래를 추가하여 절대경로를 설정 해 주어 경로가 맞는지 다시 확인한다.

"baseUrl": ".", 
"paths": {
  "@/*": [  
    "/*"
  ]
}

```