import Card from "../../Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ meetup }) => {
  return (
    <li className={classes.item} key={meetup.id}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
