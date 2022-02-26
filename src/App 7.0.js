import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currntArray) => [toDo, ...currntArray]);
  };
  //원래의 Array에 새로운 항목을 추가하려면 [항목,...Array이름]
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=>
          <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

// map 함수는 array의 각 element에 대해 함수를 지정할 수 있다. map((item, index)=>item에적용할 함수)

export default App;
