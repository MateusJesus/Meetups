import { useContext } from "react";
import FavoritesContext from "../../store/FavoriteContext";
import MeetupsList from "../../components/Meetups/MeetupsList";

const Favorites = () => {
  const favoriteCxt = useContext(FavoritesContext);

  let content;

  if (favoriteCxt.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupsList meetups={favoriteCxt.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
