import { useLocation } from "react-router-dom";

const SectionTileContent = ({ query, movies, people }) => {
  const path = useLocation().pathname;
  return !query || query.trim() === ""
    ? `${path === "/movies" ? "Popular movies" : "Popular people"}`
    : `Search results for "${query}" (${
        path === "/movies" ? movies.length : people.length
      })`;
};

export default SectionTileContent;
