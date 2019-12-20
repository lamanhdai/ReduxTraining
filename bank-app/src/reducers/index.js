export const bankReducer = (state, action) => {
  switch(action.type) {
    case "withdraw_money": return {
      ...state,
      balance: state.balance - action.payload.amount
    };
    default: return state;
  }
}