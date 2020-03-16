const names = [];

function reducer(state = names, action) {
    switch(action.type) {
      case "ADD_NAME":
        return state.concat(action.payload);
      break;
      case "DELETE_NAME":
        let newState = [...state];
        newState.splice(state.indexOf(action.payload),1);
        return newState;
    }
    return state;
}

export default reducer;