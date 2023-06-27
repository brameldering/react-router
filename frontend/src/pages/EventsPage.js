import { Link } from "react-router-dom";

const EventsPage = () => {
  const EVENTS = [
    { id: "ev1", name: "event 1" },
    { id: "ev2", name: "event 2" },
    { id: "ev3", name: "event 3" },
  ];

  return (
    <>
      <h1>Events Page </h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
