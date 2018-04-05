import { connect } from "react-redux";
import { ListItem } from "./list-item.component";
import { onSelectLocation } from "./list-item.actions";

// const mapStateToProps = state => {};

const mapDispatchToProps = {
  onSelectLocation
};

export const ListItemContainer = connect(null, mapDispatchToProps)(ListItem);
