import React, { Component } from "react";

export default class AnotherClassComponent extends Component {
  state = {
    posts: [],
    loading: true
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts = async () => {
    let payload = await fetch("https://jsonplaceholder.typicode.com/posts");
    let parsed = await payload.json();
    this.setState({ posts: parsed, loading: false });
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>loading</p>
        ) : (
          <div>
            <p>{this.state.posts[0].userId}</p>
          </div>
        )}
      </div>
    );
  }
}
