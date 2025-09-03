import { useState } from 'react';

import { useRef } from 'react';

export default function Login() {


  const emailRef = useRef();
  const passwordRef = useRef();


  // const [enteredEmail, setEnteredEmail] = useState('');
  // // const [enteredPassword, setEnteredPassword] = useState('');
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: '',
  // });

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log({
      email: enteredEmail,
      password: enteredPassword
    });

  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));
  // }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>


      <div className='submitted-data'>

        <h3>Submitted data </h3>
        {/* <p>Email : {submittedData.email}</p> */}
      </div>
    </form>
  );
}