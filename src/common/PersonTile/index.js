import { Wrapper, Img, PersonName, CharacterName, Job } from "./styled";
import BlankPicture from "../../common/PersonTile/BlankPicture.png";

const PersonTile = ({ posterImage, personName, characterName, job }) => {
  return (
    <Wrapper>
      {posterImage ? (
        <Img src={posterImage} alt="picture" />
      ) : (
        <Img src={BlankPicture} alt="no picture" />
        
      )}
      <PersonName>{personName}</PersonName>
      {characterName && <CharacterName>{characterName}</CharacterName>}
      {job && <Job>{job}</Job>}
    </Wrapper>
  );
};

export default PersonTile;
