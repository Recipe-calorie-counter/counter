import React from "react";

const Greetings = (props) => <div>Hey you! {props.firstName} {props.lastName}!</div>;

const Test = () => (
  <div>
    <Greetings firstName="John" lastName="Smith" />
  </div>
);

export default Test;