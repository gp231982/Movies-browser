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
    return (
        <StyledPagination>
            <Button>
                <PreviousArrowIcon />
                <PreviousArrowIcon />
                <ButtonContent>First</ButtonContent>
            </Button>
            <Button>
                <PreviousArrowIcon />
                <ButtonContent>Previous</ButtonContent>
            </Button>
            <PagesCounter>
                Page
                <PageNumber>1</PageNumber>
                of
                <PageNumber>500</PageNumber>
            </PagesCounter>
            <Button>
                <ButtonContent>Next</ButtonContent>
                <NextArrowIcon />
            </Button>
            <Button>
                <ButtonContent>Last</ButtonContent>
                <NextArrowIcon />
                <NextArrowIcon />
            </Button>
        </StyledPagination>
    );
};
