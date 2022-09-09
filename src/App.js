const Pet = (props) => {
  return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Matilda",
        animal: "Dog",
        breed: "Pug"
      }),
      React.createElement(Pet, {
        name: "Florence",
        animal: "Dog",
        breed: "Whippet"
      }),
      React.createElement(Pet, {
        name: "Ume",
        animal: "Cat",
        breed: "Mix"
      }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
