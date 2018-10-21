import React from "react";

function education() {
  return (
    <div class="add-education">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <a href="dashboard.html" class="btn btn-light">
              Go Back
            </a>
            <h1 class="display-4 text-center">Add Your Education</h1>
            <p class="lead text-center">
              Add any school, bootcamp, etc that you have attended
            </p>
            <small class="d-block pb-3">* = required field</small>
            <form action="login.html">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="* School Or Bootcamp"
                  name="school"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="* Degree Or Certificate"
                  name="degree"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Field Of Study"
                  name="fieldofstudy"
                />
              </div>
              <h6>From Date</h6>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control form-control-lg"
                  name="from"
                />
              </div>
              <h6>To Date</h6>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control form-control-lg"
                  name="to"
                />
              </div>
              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="current"
                  value=""
                  id="current"
                />
                <label class="form-check-label" for="current">
                  Current Job
                </label>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="Program Description"
                  name="description"
                />
                <small class="form-text text-muted">
                  Tell us about your experience and what you learned
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

export default education;
