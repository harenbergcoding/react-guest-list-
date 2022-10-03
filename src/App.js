import './App.css';
import { useState } from 'react';

let userId = -1;
function App() {
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkBoxValue, setCheckBoxValue] = useState(false);
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

  function deleteUser(userId) {
    const newState = [...guests];
    const filteredGuestList = newState.filter((guest) => guest.id !== userId);
    setGuests(filteredGuestList);
    // setGuests(guests.filter((guest) => guest.id !== userId)) the shorter way
  }

  function updateAttendance(userId, attendanceEvent) {
    const filteredGuestList = guests.filter((guest) => guest.id === userId);
    // setIsAttending(event.currentTarget.checked);

    // const newState = [...guests];
    // const filteredGuestList = newState.filter((guest) => guest.id === userId);
    // console.log('filtered guest to set attendance = true', filteredGuestList);

    const updateGuest = {
      ...filteredGuestList,
      attendance: setIsAttending(attendanceEvent),
    };
    const allGuestsAgain = [...filteredGuestList, updateGuest];
    setGuests(allGuestsAgain);
  }

  console.log(checkBoxValue);
  console.log(isAttending);

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
      <div data-test-id="guest">
        {guests.map((guest) => {
          return (
            <div key={`user-${guest.id}`}>
              <div>
                <input
                  type="checkbox"
                  checked={guest.attendance}
                  // checked={(guests[0].attendance = true)}
                  onChange={(event) => {
                    updateAttendance(guest.id, event.currentTarget.checked);
                    // setCheckBoxValue(guest.id, event.currentTarget.checked);
                    // setIsAttending(event.currentTarget.checked);
                  }}
                  aria-label={`${guest.firstName}${guest.lastName}${guest.isAttending}`}
                />
                {`${guest.firstName}
                ${guest.lastName}
                ${guest.isAttending}`}

                <button
                  onClick={() => {
                    deleteUser(guest.id);
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
