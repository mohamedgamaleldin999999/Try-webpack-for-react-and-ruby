// const initState = '';

// const greetingReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'GET_GREETING':
//       return action.payload;
//     default:
//       return state;
//   }
// };


// export default greetingReducer;

import { combineReducers } from 'redux';



const greetingReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return action.payload;
    default:
      return state;
    }
};


export const fetchgreeting = () => async (dispatch) => {
  await fetch('/api/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'GET_GREETING', payload: data });
    });
};

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;