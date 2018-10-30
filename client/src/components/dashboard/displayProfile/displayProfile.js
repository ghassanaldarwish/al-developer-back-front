import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileTable from './table/table'
import * as actions from "../../../store/actions";


function displayProfile(props) {

  return (
    <Fragment>
      {props.profile.experience.length > 0 ? (
        <ProfileTable 
        headerTitle='Experience Credentials'
        companyOrSchool='Company'
         titleOrDegree='Title' 
         locationOrStudyField='location'
         years='Years'
         deleteHandler={props.deleteExperience}
          itemsInfo={props.profile.experience}/>)
        : null}
      {props.profile.education.length > 0 ? (
      <ProfileTable 
      headerTitle='Education Credentials'
      companyOrSchool='School'
      titleOrDegree='Degree' 
      locationOrStudyField='Field of Study'
      years='Years'
      deleteHandler={props.deleteEducation}
        itemsInfo={props.profile.education}/>)
      : null}  
    </Fragment>
  );
}
export default connect(
  null,
  actions
)(withRouter(displayProfile));
