import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import Moment from "react-moment";
import Spinner from "../UI/Spinner/Spinner";
import Githubrepos from "./githubrepos/githubrepos";

class profileHandle extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  displayProfile = profile => {
    if (profile === null || this.props.profile.loading) return <Spinner />;
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <Link
                    to="/profiles"
                    className="btn btn-light mb-3 float-left"
                  >
                    Back To Profiles
                  </Link>
                </div>
                <div className="col-6" />
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-secondary text-white mb-3">
                    <div className="row">
                      <div className="col-4 col-md-3 m-auto">
                        <img
                          className="rounded-circle"
                          src={profile.user.avatar}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h1 className="display-4 text-center">
                        {profile.user.name}
                      </h1>
                      <p className="lead text-center">{profile.company}</p>
                      <p>{profile.location}</p>
                      <p>
                        <a
                          target={" _blank"}
                          className="text-white p-2"
                          href={profile.website}
                        >
                          <i className="fas fa-globe fa-2x" />
                        </a>

                        <a
                          target={" _blank"}
                          className="text-white p-2"
                          href={profile.social.facebook}
                        >
                          <i className="fab fa-facebook fa-2x" />
                        </a>
                        <a
                          target={" _blank"}
                          className="text-white p-2"
                          href={profile.social.linkedin}
                        >
                          <i className="fab fa-linkedin fa-2x" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-light mb-3">
                    <h3 className="text-center text-info">
                      {profile.user.name.trim().split(" ")[0]}
                      's Bio
                    </h3>
                    <p className="lead">{profile.bio}</p>
                    <hr />
                    <h3 className="text-center text-info">Skill Set</h3>
                    <div className="row">
                      <div className="d-flex flex-wrap justify-content-center align-items-center">
                        {profile.skills.map(skill => (
                          <div key={skill} className="p-3">
                            <i className="fa fa-check" /> {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {profile.experience.length > 0 ? (
                  <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    <ul className="list-group">
                      {profile.experience.map(exp => (
                        <li key={exp._id} className="list-group-item">
                          <h4>{exp.company}</h4>
                          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
                          {exp.current ? (
                            "current"
                          ) : (
                            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                          )}
                          <p>
                            <strong>Position:</strong> {exp.title}
                          </p>
                          <p>
                            <strong>Description:</strong> {exp.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {profile.education.length > 0 ? (
                  <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    <ul className="list-group">
                      {profile.education.map(edu => (
                        <li key={edu._id} className="list-group-item">
                          <h4>{edu.school}</h4>
                          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
                          {edu.current ? (
                            "current"
                          ) : (
                            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                          )}
                          <p>
                            <strong>Degree: </strong>
                            {edu.degree}
                          </p>
                          <p>
                            <strong>Field Of Study: </strong>
                            {edu.fieldofstudy}
                          </p>
                          <p>
                            <strong>Description:</strong> {edu.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              {profile.githubusername ? <Githubrepos {...profile} /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log("one prooooooooooooooo", this.props);
    return this.props.profile.profile ? (
      this.displayProfile(this.props.profile.profile)
    ) : (
      <Spinner />
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(profileHandle));
