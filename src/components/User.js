import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  let [count, setCount] = useState(0);
  return (
    <div className="user-details">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Button
      </button>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <p>Contact: @ujjawalsh99</p>
    </div>
  );
};

export default User;
