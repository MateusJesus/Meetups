import { useContext } from "react";
import Card from "../../Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../../store/FavoriteContext";

const MeetupItem = ({ meetup }) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      });
    }
  };

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
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
