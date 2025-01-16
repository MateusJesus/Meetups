import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../../components/Meetups/NewMeetupForm";

const NewMeetups = () => {
  const history = useNavigate();
  const onCreateNewMeetup = (data) => {
    fetch("https://meetups-c5e87-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history("/"));
  };

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm dataForm={onCreateNewMeetup} />
    </section>
  );
};

export default NewMeetups;
