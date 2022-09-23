import './App.css';
import { useState } from 'react';

let userId = 0;
function App() {
  // const guestList = [];

  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  console.log(guests);

  function createGuest(event) {
    event.preventDefault();

    userId++;
    const newGuest = {
      id: userId,
      firstName: firstName,
      lastName: lastName,
      attendance: isAttending,
    };

    setGuests([...guests, newGuest]);
    setFirstName('');
    setLastName('');
  }

  function deleteUser() {
    const newState = [...guests];
    newState.shift();
    setGuests(newState);
  }

  return (
    <div className="App">
      <br />
      <br />
      <form onSubmit={(event) => createGuest(event)}>
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
        <button hidden>Submit</button>
      </form>
      <br />
      {/* <button>Delete Guest</button> */}

      <div data-test-id="guest">
        {guests.map((guest) => {
          return (
            <div key={`user-${guests.id}`}>
              <div>
                <input type="checkbox" />
                {guest.firstName}
                {guest.lastName}
                <button
                  onClick={() => {
                    deleteUser();
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
