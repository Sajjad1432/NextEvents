import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import LocationIcon from "../icons/location-icon";
import RightArrowIcon from "../icons/right-arrow-icon";
import CalenderIcon from "../icons/calender-icon";
function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const homeAddress = location.replace(",", "\n");
  const exportLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <CalenderIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon />
            <address>{homeAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exportLink}>
            Explore Event
            <span className={classes.icon}>
              <RightArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
