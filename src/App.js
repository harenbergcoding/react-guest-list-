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

  function deleteUser() {
    const newState = [...guests];
    const index = newState.splice(newState[userId], 1);
    setGuests(newState);

    console.log(index);

    // findIndex((objects, index) => {
    //   return objects[userId].userId === userId;
    // })

    // newState.shift();
    // setGuests(newState); splice(0, 1)
  }

  // function handleChangeAttendance(event) {
  //   setCheckBoxValue(event.currentTarget.checked);
  //   setIsAttending(event.currentTarget.checked);
  //   guests[0].attendance = isAttending;
  // }

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
            <div key={`user-${guests.id}`}>
              <div>
                <input
                  type="checkbox"
                  checked={checkBoxValue}
                  onChange={(event) => {
                    setCheckBoxValue(event.currentTarget.checked);
                    setIsAttending(event.currentTarget.checked);
                  }}
                  aria-label={`${guest.firstName}${guest.lastName}${isAttending}`}
                />
                {`${guest.firstName}
                ${guest.lastName}
                ${isAttending}`}

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
