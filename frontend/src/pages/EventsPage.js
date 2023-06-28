import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const fetchedEvents = useLoaderData();
  return <>{<EventsList events={fetchedEvents} />}</>;
}

export default EventsPage;

export async function loader() {
  console.log("loadEvents");
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    console.log(response);
  } else {
    console.log(response);
    const resData = await response.json();
    return resData.events;
  }
}
