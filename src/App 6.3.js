// import Button from "./Button";
// import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("I run only Once");
  }, []);

  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when keyword&counter change");
  }, [keyword, counter]);

  ///useEffect()를 사용하면 조건에 만족할때만 호출이 가능, 두번째 element에 []만 넣으면 처음 한번만 실행

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
