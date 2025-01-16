import MeetupItem from "../MeetupItem";
import classes from "./MeetupsList.module.css";

const MeetupsList = ({ meetups }) => {
  return (
    <>
      <section>
        <ul className={classes.list}>
          {meetups.map((meetup) => (
            <MeetupItem key={meetup.id} meetup={meetup} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default MeetupsList;
