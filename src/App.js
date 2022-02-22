import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const lists = useSelector((state) => state.lists);
  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);
  const inputText = (event) => {
    setName(event.target.value);
  };
  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({
      type: "DONE_LIST",
      payload: name,
    });
  };
  const deleteList = (name) => {
    dispatch({
      type: "DELETE_LIST",
      payload: name,
    });
  };
  const addList = () => {
    if (!name) {
      return;
    } else {
      setComplete(false);

      dispatch({
        type: "ADD_LIST",
        payload: {
          name,
          complete,
        },
      });
      setName("");
    }
  };

  return (
    <div className="App">
      <h1>ReduxでTODOリスト作成</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => {
            return (
              <li key={index}>
                {list.name}
                <button onClick={() => doneList(list.name)}>完了</button>
                <button onClick={() => deleteList(list.name)}>削除</button>
              </li>
            );
          })}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <div key={index}>{list.name}</div>
          ))}
      </ul>
    </div>
  );
};

export default App;
