export const reducer = (state, action) => {
    console.log(state, action);
    let type = action.type;
    let payload = action.payload;
    switch (type) {
        case "INCREMENT": state.count++; break;
        case "DECREMENT": state.count--; break;
        case "MULTIPLY": state.count *= payload; break;
        case "ADD": state.count += payload; break;
        case "SUBTRACT": state.count -= payload; break;
        case "DIVIDE": if (payload) state.count /= payload; break;
        case "SET_X": state.input_x = payload; break;
        case "RESET": state.count = 0; break
        default: return { ...state };
    }
    return { ...state }
}