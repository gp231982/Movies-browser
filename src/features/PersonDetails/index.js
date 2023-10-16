import { MovieTile } from "../../common/MovieTile";
import { CastPerson, CrewPerson, MovieList, StylesPersonDetails, Title } from "./styled";

export const PersonDetails = () => {
    <StylesPersonDetails>
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
    </StylesPersonDetails>
};
