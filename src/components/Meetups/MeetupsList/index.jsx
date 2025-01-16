import { useEffect, useState } from "react";
import MeetupItem from "../MeetupItem";
import classes from "./MeetupsList.module.css";
import Loading from "../../Loading";

const MeetupsList = () => {
  const [loading, setLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    fetch("https://meetups-c5e87-default-rtdb.firebaseio.com/meetups.json")
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoading(true);
        setLoadedMeetups(meetups);
      });
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <section>
            <Loading />
          </section>
        </>
      ) : (
        <section>
          <ul className={classes.list}>
            {loadedMeetups.map((meetup) => (
              <MeetupItem key={meetup.id} meetup={meetup} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default MeetupsList;
