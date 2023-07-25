0. node.js 는 깔려있어야 함

1. 프로젝트 생성
npx create-react-app project-name

2. css 적용시 className은 랜덤으로 적용된다

3. useState, props, effect
 1. useState : 컴포넌트가 가질 수 있는 상태
 2. props : 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용
 3. useEffect : 처음 실행시(render)에만 실행하고 rerender 시에는 동작하지 않게 처리

4. ...[] 배열안의 객체를 지칭?

5. router 
npm install react-router-dom 설치
아래 처럼 변경됨 switch -> routes
<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
    </Routes>
</Router>;

6. useParams
url의 변경되는 키와 파라미터를 리턴