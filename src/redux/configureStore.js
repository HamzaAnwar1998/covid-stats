import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import covidReducer from './reducers/covidReducer';

const rootReducers = combineReducers({
  covidReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
