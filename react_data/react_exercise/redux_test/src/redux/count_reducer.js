import { INCREMENT, DECREMENT } from "./constant";

const initState = 0;
export default function countReducer(prestate = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return prestate + data * 1;
    case DECREMENT:
      return prestate - data * 1;
    default:
      return prestate;
  }
}
