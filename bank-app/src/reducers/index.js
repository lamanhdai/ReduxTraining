export const bankReducer = (state, action) => {
  switch(action.type) {
    case "withdraw_money": return {
      ...state,
      account: {
        ...state.account,
        money: state.account.money - action.payload.amount
      }
    };
    default: return state;
  }
}