import React, { useState } from "react";

function Form( 
  { 
    firstName, 
    lastName, 
    newsLetter, 
    onFirstNameChange, 
    onLastNameChange, 
    onNewsLetterChange 
  }
) {

  return (
    <form>
      <input type="text" onChange={onFirstNameChange} value={firstName} />
      <input type="text" onChange={onLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={onNewsLetterChange}
        checked={newsLetter}
      />
    
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
