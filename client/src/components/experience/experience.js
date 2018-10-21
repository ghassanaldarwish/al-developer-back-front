import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import * as actions from "../../store/actions";

class experience extends React.Component {
  state = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false
  };

  submitHAndler = e => {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    return (
      <div class="section add-experience">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 class="display-4 text-center">Add Your Experience</h1>
              <p class="lead text-center">
                Add any developer/programming positions that you have had in the
                past
              </p>
              <small class="d-block pb-3">* = required field</small>
              <form
                onSubmit={e => this.submitHAndler(e)}
                action="/api/profile/experience"
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="* Job Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="* Company"
                    value={this.state.company}
                    onChange={this.onChange}
                    name="company"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                  />
                </div>
                <h6>From Date</h6>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-lg"
                    name="from"
                    value={this.state.from}
                    onChange={this.onChange}
                  />
                </div>
                <h6>To Date</h6>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-lg"
                    name="to"
                    value={this.state.to}
                    onChange={this.onChange}
                    disabled={this.state.disabled ? "disabled" : ""}
                  />
                </div>
                <div class="form-check mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="current"
                    id="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                  />
                  <label class="form-check-label" for="current">
                    Current Job
                  </label>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    placeholder="Job Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  <small class="form-text text-muted">
                    Some of your responsabilities, etc
                  </small>
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(experience));
