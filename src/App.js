import './App.css';
import { useState } from 'react';

let userId = -1;
function App() {
  // guests is a useState variable to render the guestlist on every update
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  console.log('guests', guests);
  const baseUrl = 'http://localhost:4000';

  async function createGuestInApiByFirstnameAndLastname(firstName, lastName) {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: `${firstName}`,
        lastName: `${lastName}`,
      }),
    });
    const createdGuest = await response.json();
  }

  function createGuest(event) {
    event.preventDefault();
    userId++;

    // initial empty guest object
    const newGuest = {
      id: userId,
      firstName: firstName,
      lastName: lastName,
      attendance: isAttending,
    };

    // spread operator. pushes newly created guest into the guests array
    setGuests([...guests, newGuest]);

    // sets input fields to blank
    setFirstName('');
    setLastName('');
  }

  // filters userlist
  function deleteUserById(userId) {
    setGuests(guests.filter((guest) => guest.id !== userId));
  }

  function updateAttendanceById(guestId, event) {
    const findGuest = guests.filter((guest) => guest.id === guestId);
    console.log('findGuest', findGuest);

    const foundGuestWithUpdatedAttendance = (findGuest[0].attendance =
      event.target.checked);
    console.log('findGuest[0].attendance', findGuest[0].attendance);
    setGuests(guests);
  }

  console.log('isAttending', isAttending);
  console.log('guests', guests);

  return (
    <div className="App">
      <h1>React Guest List</h1>
      <form
        onSubmit={(event) => {
          createGuest(event),
            createGuestInApiByFirstnameAndLastname(firstName, lastName);
        }}
      >
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
                  onChange={(event) => {
                    updateAttendanceById(guest.id, event);
                  }}
                  aria-label={`${guest.firstName}${guest.lastName} attending status`}
                />
                {`${guest.firstName}
                ${guest.lastName},
                Attendance: ${guest.attendance}`}

                <button
                  aria-label={`Remove ${guest.firstName}${guest.lastName}`}
                  onClick={() => {
                    deleteUserById(guest.id);
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
