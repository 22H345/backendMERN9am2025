import { useState } from 'react';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(enteredValues); // store submitted values in state
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleReset (){
    setEnteredValues({email:"" , password:''})
    setSubmittedData(null)
  }


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
            onChange={(event) =>
              handleInputChange('email', event.target.value)
            }
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={handleReset}
          
        >
          Reset
        </button>
        <button className="button">Login</button>
      </p>


      <div className='submitted-data'>

        <h3>Submitted data </h3>
        <p>Email : {submittedData.email}</p>
      </div>
    </form>
  );
}


// const [enteredEmail, setEnteredEmail] = useState('');
// // const [enteredPassword, setEnteredPassword] = useState('');
// const [enteredValues, setEnteredValues] = useState({
//   email: '',
//   password: '',
// });

// function handleSubmit(event) {
//   event.preventDefault();

//   const enteredEmail = emailRef.current.value;
//   const enteredPassword = passwordRef.current.value;

//   console.log({
//     email: enteredEmail,
//     password: enteredPassword
//   });

// }



// function handleEmailChange(event) {
//   setEnteredEmail(event.target.value);
// }

// function handlePasswordChange(event) {
//   setEnteredPassword(event.target.value);
// }
