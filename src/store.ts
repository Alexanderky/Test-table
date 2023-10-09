import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import listReducer from './components/redux/workReducer';
const store = createStore(
  combineReducers({ listReducer }),
  composeWithDevTools()
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
