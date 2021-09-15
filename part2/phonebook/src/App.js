import React, { useState } from "react";
import "./App.css";
import Phonebook from "./Phonebook";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName.trim(),
    };

    var name = personObj.name;

    if (checkDuplicate(name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    persons.push(personObj);
    setPersons(persons);
    setNewName("");
    return;
  };

  function checkDuplicate(item) {
    var valueArr = persons.map(function (data) {
      return data.name;
    });

    var isDuplicate = false;
    if (valueArr.includes(item)) {
      isDuplicate = true;
    }
    return isDuplicate;
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Phonebook persons={persons} />
    </div>
  );
};

export default App;
