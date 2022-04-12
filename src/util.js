export const intitialValue = {
  items: [],
  amount: 0,
  addHandler: () => {},
  removeHandler: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, items: state.items.concat(action.item) };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((ele) => action.id !== ele.id),
      };
    }
    case "UPDATE_QUANTITY": {
      state.items.filter((ele) => ele.id === action.id)[0]["quantity"] =
        action.quantity;
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
