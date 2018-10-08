import React from "react";
import PropTypes from "prop-types";

const List = ({ data }) => (
  <div className="list">
    <h1>Result</h1>
    {Object.values(data).map(info => (
      <div key={info.output.username}>
        <h2>{info.output.username}</h2>
        {Object.entries(info.output).map((line, i) => (
          <div key={i}>
            <p className="label">{line[0]}</p>
            <p className="detail">{line[1]}</p>
          </div>
        ))}
      </div>
    ))}
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
