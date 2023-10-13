import { Genre } from "../../common/Genre";
import { Genres } from "../../common/Genres";
import {
  Tile,
  Picture,
  Information,
  Title,
  Year,
  ProductionAndRelease,
  ProductionBox,
  Production,
  ProductionData,
  ReleaseBox,
  Release,
  ReleaseData,
  Description,
  Rating,
  Rate,
  TotalRate,
  Votes,
} from "./styled";
import { ReactComponent as RateIcon } from "../../common/MovieTile/rate.svg";

export const MovieDetail = () => {
  return (
    <Tile>
      <Picture />
      <Information>
        <Title>Mulan</Title>
        <Year>2023</Year>
        <ProductionAndRelease>
          <ProductionBox>
            <Production>Production:</Production>
            <ProductionData>China, United States of America</ProductionData>
          </ProductionBox>
          <ReleaseBox>
            <Release>Release date:</Release>
            <ReleaseData>24.10.2023</ReleaseData>
          </ReleaseBox>
        </ProductionAndRelease>
        <Rating>
          <RateIcon />
          <Rate>9</Rate>
          <Votes>500 votes</Votes>
        </Rating>
        <Genres>
          <Genre>Horror</Genre>
          <Genre>Horror</Genre>
          <Genre>Horror</Genre>
        </Genres>
        <Description>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </Description>
      </Information>
    </Tile>
  );
};
