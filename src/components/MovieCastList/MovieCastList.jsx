import MovieCastListItem from "../MovieCastListItem/MovieCastListItem";
import css from "./MovieCastList.module.css";

const MovieCastList = ({ cast }) => {
  return cast.length > 0 ? (
    <ul className={css.list}>
      {cast.map(({ cast_id, profile_path, name, character }) => {
        const defaultImg = "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI";
        const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;

        return (
          <li key={cast_id}>
            <MovieCastListItem
              imageUrl={profile_path ? imageUrl : defaultImg}
              name={name}
              character={character}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We have no information about the cast</p>
  );
};

export default MovieCastList;