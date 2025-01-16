import Card from "../../Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ dataForm }) => {
  const createNewMeetup = (data) => {
    data.preventDefault();
    const formData = {
      title: data.target.title.value,
      image: data.target.image.value,
      address: data.target.address.value,
      description: data.target.description.value,
    };
    dataForm(formData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={createNewMeetup}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" required rows={5} />
        </div>
        <div className={classes.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
