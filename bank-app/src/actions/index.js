export const withdrawMoney = (money) => {
  return {
    type: "withdraw_money",
    payload: {
      amount: +money
    }
  }
}