import paginationPage from "./paginationPage";

export const getPagination = () => {
    const allPages = data.all_pages > 500 ? 500 : data.all_pages;

    useEffect(() => {({
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
    }

    return {
        page,
        allPages,
        setNextPage,
        setPreviousPage,
        setFirstPage,
        setLastPage,
    };
};

