// src/components/ParentComponent
import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData"

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsLetter, setNewsLetter] = useState(false)

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleNewsLetterChange(e) {
    setNewsLetter(e.target.checked)
  }

  return (
      <>
        <Form
          firstName={firstName}
          lastName={lastName}
          newsLetter={newsLetter}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          onNewsLetterChange={handleNewsLetterChange}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
      </>
  );
}

export default ParentComponent; 