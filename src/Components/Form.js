import React from 'react';
import { useState } from 'react';

const regexExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const [submitted, setsubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
       setNameError("Name is required")
      }
    else if (specialChars.test(name)){
        setNameError('Only letters are allowed');
    }else {
        setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (regexExp.test(e.target.value) === false) {
      setEmailError("Email is invalid");
    }
    
  };

  const handlePassWordChange = (e) => {
    setPassWord(e.target.value);
    if (e.target.value === "" ) {
        setPasswordError('Password is required');
    } else if (e.target.value.length < 6 || e.target.value.length > 12) {
        setPasswordError('Password must be between 6-12 characters');
    } else {
        setPasswordError('');
    }
    
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if (nameError || emailError || passwordError) {
        setErrorMessage('Please correct the input errors');
        return;
    }

    setErrorMessage('');
    setSuccessMessage('Submitted successfully');
};

    console.log(submitted);
;

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder='Name'
          onChange={handleNameChange}
        />
        <label htmlFor="email"> Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder='Email'
          onChange={handleEmailChange}
        />
        <label htmlFor="password"> Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          placeholder='Password'
          onChange={handlePassWordChange}
        />
        <br></br>
        <br></br>
        <button>submit</button>
      </form>
      <div>
        <p type="text">-- {errorMessage}--</p>
        <p type ='text'>-- {successMessage} --</p>
      </div>
    </div>
  );
}

export default Form;
