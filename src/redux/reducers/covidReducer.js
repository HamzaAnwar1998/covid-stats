import { GET_COVID_DATA } from '../actions';

const initialState = {
  covidData: [],
};

const covidReducer = (state = initialState.covidData, action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default covidReducer;
