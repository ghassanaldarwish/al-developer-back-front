import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../../UI/Spinner/Spinner";

class githubrepos extends Component {
  state = {
    clientId: "1ea4ed56c8ce48cdc78f",
    clientSecret: "feed377c6d4b291dc36bf0c81c393f6e8868e9b8",
    count: 6,
    sort: "updated",
    repos: null,
    errorFetch: false
  };

  componentDidMount() {
    const { githubusername } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    axios
      .get(
        `https://api.github.com/users/${githubusername}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
      )

      .then(res => {
        this.setState({ repos: res.data, errorFetch: false });
      })
      .catch(err => this.setState({ errorFetch: true }));
  }
  render() {
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {Array.isArray(this.state.repos) ? (
          this.state.repos.map(repo => (
            <div key={repo.id} className="card card-body mb-2">
              <div className="row">
                <div className="col-md-6">
                  <h4>
                    <a
                      href={repo.html_url}
                      className="text-info"
                      target="_blank"
                    >
                      {" "}
                      {repo.name}
                    </a>
                  </h4>
                  <p>{repo.description}</p>
                </div>
                <div className="col-md-6">
                  <span className="badge badge-info mr-1">
                    Stars: {repo.stargazers_count}
                  </span>
                  <span className="badge badge-secondary mr-1">
                    Watchers: {repo.watchers_count}
                  </span>
                  <span className="badge badge-success">
                    Forks: {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : this.state.errorFetch ? (
          <p>
            please check your github user name !!
            <Link
              to="/edit-profile"
              style={{ color: "blue", textDecoration: "underLine" }}
            >
              follow this path
            </Link>
          </p>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default githubrepos;
