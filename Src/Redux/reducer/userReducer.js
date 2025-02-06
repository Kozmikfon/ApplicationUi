const initialState = {
  user: [],
  id: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userCreate':
      return {...initialState, user: action.payload};
    case 'deleteUser':
      const newdata = [];
      state.user.map(item => {
        if (item.username !== action.payload.username)
        return item;
      });

      return {...state};

    default:
      return state;
  }
};
export default userReducer;
