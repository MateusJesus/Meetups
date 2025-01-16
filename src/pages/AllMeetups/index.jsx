import { useEffect, useState } from "react";
import MeetupsList from "../../components/Meetups/MeetupsList";
import Loading from "../../components/Loading";

const AllMeetups = () => {
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

  if (!loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupsList meetups={loadedMeetups} />
    </section>
  );
};
export default AllMeetups;
