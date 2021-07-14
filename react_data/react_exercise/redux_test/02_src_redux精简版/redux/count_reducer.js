const initState = 0;
export default function countReducer(prestate = initState, action) {
    const { type, data } = action;
    switch (type) {
        case "increment":
            return prestate + data*1;
        case "decrement":
            return prestate - data*1;
        default:
            return prestate;
    }
}