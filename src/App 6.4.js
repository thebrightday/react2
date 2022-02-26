import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("I'm here");
//     return () => console.log("destroyed");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function Hello() {
//   function Hifn() {
//     console.log("created :)");
//     return byfn;
//   }
//   function byfn() {
//     console.log("bye :(");
//   }
//   useEffect(Hifn, []);
//   return <h1>Hello</h1>;
// }

function Hello() {
  useEffect(function () {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);

  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
}

//위 처럼 2가지방법으로 함수 표현가능

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
// 자바스크립트를 사용할때는 {} 중괄호 사용해야됨
// 함수를 불러올때는 대문자

export default App;
