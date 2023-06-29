import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  console.log("EventDetailPage data");
  console.log(data);
  return <EventItem event={data.event} />;
};
export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.eventId;
  console.log("EventDetailPage.loader eventId: " + eventId);
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json({ message: "Could not fetch event detail." }, { status: 500 });
  } else {
    return response;
  }
}

export async function action(params, request) {
  const eventId = params.eventId;
  console.log("In EventDetailPage.action with eventId: " + eventId);
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method, //"DELETE",
  });
  if (!response.ok) {
    console.log("In EventDetailPage.action !response.ok");
    console.log(response);
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}
