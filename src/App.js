import React from "react";

const App = () => {
  const profiles = [
    {
      name: "taro",
      age: 10,
    },
    {
      name: "hanako",
      age: 12,
    },
    {
      name: "hanako2",
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

User.defaultProps = {
  age: 1,
};

export default App;
