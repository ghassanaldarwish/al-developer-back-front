import React, { Component } from "react";
import Post from "../../components/post/post";
import Layout from "../../HOC/layout/Layout";

class post extends Component {
  render() {
    return (
      <Layout>
        <Post />
      </Layout>
    );
  }
}

export default post;
