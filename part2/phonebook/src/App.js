import React, { useEffect, useState } from "react";
import "./App.css";
import Phonebook from "./Phonebook";
import Filter from "./Filter";
import service from "./service";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState(persons);

  useEffect(() => {
    service.getAll().then((initial) => {
      setPersons(initial);
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

  function changePersons(personToAdd, returnObj) {
    setPersons(
      persons.map((person) => {
        //person.id !== personToAdd.id ? person : returnObj;
        return replaceOldObj(person, personToAdd, returnObj);
      })
    );
  }

  function replaceOldObj(person, personToAdd, returnObj) {
    person = person.id !== personToAdd.id ? person : returnObj;
    return person;
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    var name = personObj.name;

    if (checkDuplicate(name)) {
      const old = persons.filter((e) => e.name === name);
      const personToAdd = old[0];
      const updatedPerson = { ...personToAdd, number: newNumber.trim() };
      const confirm = window.confirm(
        `${name} is already added to phonebook, replace the old number with a new one`
      );

      if (confirm) {
        service
          .update(updatedPerson.id, personObj)
          .then((returnObj) => {
            changePersons(personToAdd, returnObj);
            setNewName("");
            setNewNumber("");
            alert(`Edited ${returnObj.name}`);
            setTimeout(() => {}, 3000);
          })
          .catch((err) => {
            alert(err.response.data.console.error);
            setTimeout(() => {}, 3000);
          });
      }
    } else {
      service.create(personObj).then((returnObj) => {
        setPersons(persons.concat(returnObj));
        setNewName("");
        setNewNumber("");
      });
    }
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
        <Phonebook persons={persons} setPersons={setPersons} />
      ) : (
        <Phonebook persons={filterPersons} setPersons={setPersons} />
      )}
    </div>
  );
};

export default App;
