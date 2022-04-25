import { useRouter } from "next/router";
import { getFilteredEvents } from "./../../dummy-data";
import EventList from "../../components/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../ui/button";

function FilteredEventPage(props) {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return (
      <Fragment>
        <p className="center">Loading...</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values!</p>;
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No Events found!</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <ResultsTitle />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventPage;
