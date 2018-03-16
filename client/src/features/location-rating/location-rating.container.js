import { connect } from "react-redux";
import { LocationRating } from "./location-rating.component";
import { updateLocationRatingAction } from "./location-rating.actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    onClickFeature: updateLocationRatingAction
};

export const LocationRatingContainer = connect(mapStateToProps,mapDispatchToProps)(LocationRating);
