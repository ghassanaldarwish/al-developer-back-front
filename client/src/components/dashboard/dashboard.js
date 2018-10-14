import React from "react";

import Spinner from "../UI/Spinner/Spinner";

const dashboard = props => {
  let dashboardData = <p>hello dash</p>;
  if (props.profile.profile === null || props.profile.loading) {
    dashboardData = <Spinner />;
  } else {
    if (Object.keys(props.profile.profile) > 0) {
      dashboardData = <p>your profile</p>;
    } else {
      dashboardData = <p>create profile</p>;
    }
  }
  return dashboardData;
};

export default dashboard;
