import { connect } from 'react-redux';
import { ListItem } from './list-item.component';

// const mapStateToProps = state => {};

const mapDispatchToProps = {};

export const ListItemContainer = connect(null, mapDispatchToProps)(ListItem);
