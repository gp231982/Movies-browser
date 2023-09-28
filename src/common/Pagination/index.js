import {
    StyledPagination,
    Button,
    ButtonText,
    PreviousArrowIcon,
    NextArrowIcon,
    PagesCounter,
    PageNumber,
} from "/.styled";

export const Pagination = () => {
    const theFirstPage = page === 1;
    const theLastPage = page === totalPages;
   
    return (
        <StyledPagination>
            <Button disabled={theFirstPage}> 
                <PreviousArrowIcon />
                <PreviousArrowIcon />
                <ButtonText>First</ButtonText>
            </Button>
            <Button disabled={theFirstPage}>
                <PreviousArrowIcon />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PagesCounter>
                Page <PageNumber>{page}</PageNumber> of <PageNumber>{totalPages}</PageNumber>
            </PagesCounter>
            <Button disabled={theLastPage}>
                <ButtonText>Next</ButtonText>
                <NextArrowIcon />
            </Button>
            <Button disabled={theLastPage}>
                <ButtonText>Last</ButtonText>
                <NextArrowIcon />
                <NextArrowIcon />
            </Button>
        </StyledPagination>
    );
};