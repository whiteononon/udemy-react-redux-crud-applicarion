import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {
      name: "taro",
    },
    {
      name: "hanako",
      age: 12,
    },
    {
      name: "hanako",
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      i am {props.name} {props.age} years old
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default App;
