import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook/phonebook-reducer';

const rootSReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(rootSReducer, composeWithDevTools());

export default store;
