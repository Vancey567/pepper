import React from "react";

function Stars({ star }) {
  const stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(<img key={i} src="/images/star.png" alt="stars" />);
  }
  return <div className="star">{stars}</div>;
}

export default Stars;
