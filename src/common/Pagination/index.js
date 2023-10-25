import {
  StyledPagination,
  Button,
  ButtonContent,
  PreviousArrowIcon,
  NextArrowIcon,
  PagesCounter,
  PageNumber,
} from "./styled";
import { usePagination } from "./usePagination";

export const Pagination = () => {
  const {
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  } = usePagination();
  const firstPage = page === 1;
  const lastPage = page === totalPages;

  return (
    <StyledPagination>
      <Button onClick={setFirstPage} disabled={firstPage}>
        <PreviousArrowIcon />
        <PreviousArrowIcon />
        <ButtonContent>First</ButtonContent>
      </Button>
      <Button onClick={setPreviousPage} disabled={firstPage}>
        <PreviousArrowIcon />
        <ButtonContent>Previous</ButtonContent>
      </Button>
      <PagesCounter>
        Page
        <PageNumber>{page}</PageNumber>
        of
        <PageNumber>{allPages}</PageNumber>
      </PagesCounter>
      <Button onClick={setNextPage} disabled={lastPage}>
        <ButtonContent>Next</ButtonContent>
        <NextArrowIcon />
      </Button>
      <Button onClick={setLastPage} disabled={lastPage}>
        <ButtonContent>Last</ButtonContent>
        <NextArrowIcon />
        <NextArrowIcon />
      </Button>
    </StyledPagination>
  );
};
