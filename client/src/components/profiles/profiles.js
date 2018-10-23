import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";

class profiles extends React.Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  displayProfiles = () => (
    <div className="profiles">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="lead text-center">
              Browse and connect with developers
            </p>

            {this.props.profile.profiles.map(profile => (
              <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      src={profile.user.avatar}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>{profile.handle}</h3>
                    <p>{profile.company}</p>
                    <p>{profile.location}</p>
                    <a href="profile.html" className="btn btn-info">
                      View Profile
                    </a>
                  </div>
                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Skill Set</h4>
                    <ul className="list-group">
                      {profile.skills.map(skill => (
                        <li className="list-group-item">
                          <i className="fa fa-check pr-1" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  render() {
    return this.props.profile.profiles ? this.displayProfiles() : <Spinner />;
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
)(profiles);
