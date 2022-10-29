import { legacy_createStore as createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
