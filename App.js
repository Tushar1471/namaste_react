const newHeading = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1", key: "child1" }, [React.createElement("h1", { key: 1 }, "  I am h1 tag"), React.createElement("h2", { key: 2 }, "I am h2 tag")]),
    React.createElement("div", { id: "child2", key: "child2" }, [React.createElement("h1", { key: 1 }, "Namaste React By Akshay Saini"), React.createElement("h2", { key: 2 }, "Namaste React By Akshay Saini")])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newHeading);