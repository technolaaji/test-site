import React, { Component, Fragment, useState, useEffect } from "react";
import MyFunctionalComponent from "./MyFunctionalComponent";
import AnotherClassComponent from "./AnotherClassComponent";

export default function MyClassComponent(props) {
  const [age, setAge] = useState();
  const [another_age, setAnotherAge] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(posts);
      });
  }, []);
  const ageChanger = e => {
    setAge(e.target.value);
  };
  const submitAge = () => {
    setAnotherAge(age);
  };

  return (
    <div>
      <input value={age} onChange={ageChanger} onC placeholder="enter value" />
      <button onClick={submitAge}>submit</button>
      <p>I am a {age}</p>
      <AnotherClassComponent />
    </div>
  );
}
