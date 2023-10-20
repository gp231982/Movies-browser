import { CastPerson, CrewPerson, MovieList, StyledPersonDetails, Title } from "./styled";
import { MovieTile } from "../../common/MovieTile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonId, selectPersonDetails, selectPersonError, selectPersonLoading } from "../../slices/personDetailSlice";
import { useEffect } from "react";
import { Loading } from "../../common/States/Loading";
import { Error } from "../../common/States/Error";

export const PersonDetails = () => {
    const id = useParams().id;
    const dispatch = useDispatch();
    const loading = useSelector(selectPersonLoading);
    const error = useSelector(selectPersonError);
    const details = useSelector(selectPersonDetails);

    useEffect(() => {
        if (location.includes()) dispatch(fetchPersonId(id));
    }, [dispatch, location, id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <>
            <StyledPersonDetails>
                <>
                    poster
                    name
                    birthday
                    birthplace
                    biography
                </>
                <CastPerson>
                    <Title>
                        Movies - cast
                    </Title>
                    <MovieList>
                        <MovieTile />
                    </MovieList>
                </CastPerson>
                <CrewPerson>
                    <Title>
                        Movies - crew
                    </Title>
                    <MovieList>
                        <MovieTile />
                    </MovieList>
                </CrewPerson>
            </StyledPersonDetails>
        </>
    )
};
