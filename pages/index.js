import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list";
import Layout from "../layout/layout";
export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return <EventList items={featuredEvents} />;
}
