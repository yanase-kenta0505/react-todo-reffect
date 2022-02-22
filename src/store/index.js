import { createStore } from "redux";

const initialState = {
  lists: [
    {
      name: "ブログを確認",
      complete: false,
    },
    {
      name: "メールの返信",
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DONE_LIST":
      return {
        lists: state.lists.map((list) => {
          if (list.name !== action.payload) {
            return list;
          } else {
            return {
              ...list,
              complete: true,
            };
          }
        }),
      };
    case "DELETE_LIST":
      return {
        lists: state.lists.filter((list) => list.name !== action.payload),
      };
    case "ADD_LIST":
      return {
        lists: [...state.lists, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
