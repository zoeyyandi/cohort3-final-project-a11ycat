import { connect } from 'react-redux';
import { AutoCompleteList } from './auto-complete-list.component';
import { updateSearchInput } from '../search-bar/search-bar.actions';
import { toggleAutoComplete } from './auto-complete-list.actions';
import { textSearch } from '../search-bar/search-bar.actions';


const mapStateToProps = state => ({
  autoCompleteList: state.autoCompleteListReducer.autoCompleteList,
  userLocation: state.appReducer.userLocation
});

const mapDispatchToProps = {
  updateSearchInput,
  toggleAutoComplete,
  textSearch
};

export const AutoCompleteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoCompleteList);
