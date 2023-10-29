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

import searchQueryParamName from "../searchQueryParamName";

export const usePagination = () => {
  const location = useLocation();
  const moviesData = useSelector(selectMovie);
  const peopleData = useSelector(selectData);
  const data = location.pathname.startsWith("/movies")
    ? moviesData
    : peopleData;
  const allPages = data.length > 500 ? 500 : data.length;
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const [page, setPage] = useState(
    parseInt(useQueryParameter(paginationPage)) || 1
  );

  useEffect(() => {
    replaceQueryParameter({
      key: paginationPage,
      value: page,
    });
  }, [page, query]);

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
