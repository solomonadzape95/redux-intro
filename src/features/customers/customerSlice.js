/* eslint-disable no-unused-vars */
const initailStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initailStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
