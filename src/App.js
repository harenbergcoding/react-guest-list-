import './App.css';
import { useState } from 'react';

function App() {
  // const guestList = [];
  let userId = 0;
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  console.log(guests);
  function createGuest(event) {
    event.preventDefault();
    const newGuest = {
      id: userId,
      firstName: firstName,
      lastName: lastName,
      attendance: isAttending,
    };
    userId++;
    setGuests([...guests, newGuest]);
    setFirstName('');
    setLastName('');
  }

  // function deleteUser() {}
  // const newState = [...guests];
  // newState.find(guests.id === newGuest.id).shift();
  // setGuests(guests);

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
        <button>Submit</button>
      </form>
      <br />
      <button>Delete Guest</button>

      <div data-test-id="guest">
        {guests.map((guest) => {
          return (
            <div key={`user-${guests.id}`}>
              <div>
                {guest.firstName}
                {guest.lastName}
                {/* <input type="checkbox" /> */}
                <button>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
