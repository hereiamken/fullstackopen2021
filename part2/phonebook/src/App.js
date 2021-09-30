import React, { useEffect, useState } from "react";
import "./App.css";
import Phonebook from "./Phonebook";
import Filter from "./Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState(persons);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("persons: ", persons);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log("before filter ", persons);
    setFilterPersons(
      persons.filter(
        (person) =>
          person.name
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
      )
    );
    console.log(event.target.value);
    console.log("after filter ", filterPersons);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName.trim(),
      number: newNumber.trim(),
      id: persons.length + 1,
    };

    var name = personObj.name;

    if (checkDuplicate(name)) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObj));
    setNewName("");
    setNewNumber("");
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
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <Filter onChange={handleFilterChange} value={filter}></Filter>
      </form>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange} />
        </div>
        <div>
          debug: {newName} {newNumber}
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filter === "" ? (
        <Phonebook persons={persons} />
      ) : (
        <Phonebook persons={filterPersons} />
      )}
    </div>
  );
};

export default App;
