const initialState = {
  isAout : false
}

const signInReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch(action.type) {
      case  "SIGNE_IN" : return {isAout : action.payload };
      default : return state;
  }
}
export default signInReducer;