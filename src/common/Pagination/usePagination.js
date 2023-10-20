import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../common/queryParameters";
import paginationPage from "./paginationPage";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovie } from "../../slices/movieSlice";
import { selectData } from "../../slices/peopleSlice";
import { useEffect, useState } from "react";

export const usePagination = () => {
  const location = useLocation();
  const moviesData = useSelector(selectMovie);
  const peopleData = useSelector(selectData);
  const data = location.pathname.startsWith("/movies")
    ? moviesData
    : peopleData;
  const allPages = data.total_pages > 500 ? 500 : data.total_pages;
  console.log(allPages);
  const replaceQueryParameter = useReplaceQueryParameter();
  const [page, setPage] = useState(
    parseInt(useQueryParameter(paginationPage)) || 1
  );

  useEffect(() => {
    replaceQueryParameter({
      key: paginationPage,
      value: page,
    });
  }, [page]);

  const setNextPage = () => {
    setPage((page) => (page += 1));
  };

  const setPreviousPage = () => {
    setPage((page) => (page -= 1));
  };

  const setFirstPage = () => {
    setPage(1);
  };

  const setLastPage = () => {
    setPage(allPages);
  };

  return {
    page,
    allPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  };
};
