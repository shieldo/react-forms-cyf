import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "",
    colour: "",
    vegetable: "",
    fruit: "",
  });

  const { name, colour, vegetable, fruit } = person;

  const setField = (field, value) => {
    setPerson({ ...person, [field]: value });
  };

  const [showingPerson, setShowingPerson] = useState(false);

  return showingPerson ? (
    <>
      <p>
        {name} is a person whose favourite colour is {colour}. They like{" "}
        {vegetable} and also {fruit}.
      </p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowingPerson(false);
        }}
      >
        OK fine. Tell me about someone else!
      </a>
    </>
  ) : (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowingPerson(true);
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setField("name", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="colour">Favourite colour</label>
          <input
            type="text"
            id="colour"
            value={colour}
            onChange={(e) => setField("colour", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="vegetable">Favourite vegetable</label>
          <input
            type="text"
            id="vegetable"
            value={vegetable}
            onChange={(e) => setField("vegetable", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fruit">Favourite fruit</label>
          <input
            type="text"
            id="fruit"
            value={fruit}
            onChange={(e) => setField("fruit", e.target.value)}
          />
        </div>
        <input type="submit" value="It's a person!" />
      </form>
    </main>
  );
}

export default App;
