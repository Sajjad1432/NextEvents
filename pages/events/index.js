import React from "react";
import EventList from "../../components/event-list";
import EventSearch from "../../components/event-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function AllEventPage(props) {
  const events = getAllEvents();

  const router = useRouter();
  const findEventHandler = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventPage;
