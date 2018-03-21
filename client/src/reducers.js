import { combineReducers } from 'redux';
import { appReducer } from './features/app/app.reducers';
import { listItemReducer } from './features/list-item/list-item.reducers';
import { searchBarReducer } from './features/search-bar/search-bar.reducers';
import { autoCompleteListReducer } from './features/auto-complete-list/auto-complete-list.reducers';

export default combineReducers({
  appReducer,
  listItemReducer,
  searchBarReducer,
  autoCompleteListReducer
});
