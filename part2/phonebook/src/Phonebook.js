import React from "react";
import Line from "./Line";
import service from "./service";

const Phonebook = ({ persons, setPersons, setMessage }) => {
  const values = persons;
  console.log(values);

  const isDelete = (person) => {
    const confirm = window.confirm(`Delete ${person.name}`);
    if (confirm) {
      service
        .deletePerson(person.id)
        .then((response) => {
          setPersons(values.filter((item) => item.id !== person.id));
          // alert(`${person.name} was already removed from server`);
          // setTimeout(() => {}, 3000);
          setMessage({
            content: `Deleted ${person.name} successfully`,
            type: "SUCCESS",
          });
          setTimeout(() => {}, 3000);
        })
        .catch((err) => {
          //alert(`${person.name} was already removed from server`);
          setMessage({
            content: `${person.name} was already removed from server`,
            type: "ERROR",
          });
          setTimeout(() => {}, 3000);
        });
    }
  };

  return (
    <div>
      {values.map((value) => (
        <Line key={value.id} value={value} deletePerson={isDelete} />
      ))}
    </div>
  );
};

export default Phonebook;
