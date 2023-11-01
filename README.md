# 목표

기술 | Stacks | 달성률
--|:--:|--:
**<a href="#Language">Language</a>** | Typescript | 0%
**<a href="#DB">DB</a>** | mongodb on docker | 0%
**<a href="#클라이언트">클라이언트</a>** | ReactJS | 0%
**<a href="#서버">서버</a>** | NextJS | 0%
**<a href="#상태관리">상태관리</a>** | Recoil | 0%
**<a href="#CSS">CSS</a>** | Tailwind CSS | 0%
**<a href="#배포">배포</a>** | ? | 0%






## <div id="Language">Typescript를 사용한 이유</div>
```
->
```

## <div id="DB">Mongo DB를 사용한 이유</div>
```
-> 
```
## <div id="클라이언트">ReactJS를 사용한 이유</div>
```
-> 
```
## <div id="서버">NextJS를 사용한 이유</div>
```
-> 
```
## <div id="상태관리">{상태관리}를 사용한 이유</div>
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
## <div id="배포">{배포}를 사용한 이유</div>
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


3. tsconfig.json에 아래를 추가하여 절대경로를 설정 해 준다.

"baseUrl": ".", 
"paths": {
  "@/*": [  
    "/*"
  ]
}

```