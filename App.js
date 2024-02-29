import React from "react";
import ReactDOM from "react-dom/client";

// Component Composition
const Title = () => {
  return (
    <>
      <h1>So,Are you Ready to join us!</h1>
    </>
  );
};
const HeadingComponent = () => {
  return (
    <>
      <h1>Hello My name is Tushar Malhotra and I am 23 years old.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
        asperiores placeat quasi vitae nihil sunt non cumque inventore ea
        reiciendis voluptate nulla qui possimus iure corporis, praesentium
        aperiam doloremque eum.
      </p>
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
