import './App.css';
// import propTypes from 'prop-types';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState('not attending');

  // const baseUrl = 'http://localhost:4000';

  // async function getUser() {
  //   const response = await fetch(`${baseUrl}/guests/:id`);
  //   const guest = await response.json();
  //   console.log(guest);
  // }
  // getUser();

  // function User(props) {
  //   return (
  //     <>
  //       {props.firstName}
  //       {props.lastName}
  //       <button></button>
  //       {isAttending}
  //     </>
  //   );
  // }

  // function createUser() {
  //   return (
  //     <>
  //       <User
  //         firstName={'Michael'}
  //         lastName={'H'}
  //         {isAttending}
  //       ></User>
  //     </>
  //   );
  // }

  return (
    <div className="App">
      <button>Save Guestlist</button>
      <button>Load Guestlist</button>
      <br />
      <br />
      <form onSubmit={(event) => event.preventDefault}>
        <label>
          First name
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          Last name
          <input
            value={lastName}
            onChange={(event) => {
              setLastName(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <button>Delete Guest</button>

      <div data-test-id="guest">
        {firstName}
        {lastName}
      </div>
    </div>
  );
}

export default App;
