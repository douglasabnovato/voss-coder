import React from "react";

function UserGreeting(props) {
  return (
    <div>
        <h2>Please sign up.</h2>
        <button onClick={props.onClick}>Login</button>
    </div>
  ) ;
}

function GuestGreeting(props) {
  return (
    <div>
        <h2>Welcome back!</h2>
        <button onClick={props.onClick}>Logout</button>
    </div>
  );
}

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
