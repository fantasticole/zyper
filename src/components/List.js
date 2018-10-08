import React from "react";
import PropTypes from "prop-types";

const List = (props) => (
  <div className="list">
    <h1>List</h1>
  </div>
);

const datumPropType = PropTypes.shape({
  output: PropTypes.shape({
    "Average Comments": PropTypes.string,
    "Average Engagement (per post as % of followers)": PropTypes.string,
    "Average Engagement per post": PropTypes.string,
    "Average Likes": PropTypes.string,
    "Average Video Views": PropTypes.string,
    "Bio": PropTypes.string,
    "Counted posts": PropTypes.num,
    "Followers": PropTypes.num,
    "Following": PropTypes.num,
    "Number of Hashtags": PropTypes.string,
    "Total Engagement": PropTypes.string,
    "username": PropTypes.string,
  }),
});

List.propTypes = {
  data: PropTypes.objectOf(datumPropType),
};

List.defaultProps = {
  data: null,
};

export default List;
