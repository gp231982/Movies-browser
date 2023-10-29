import { Wrapper, Img, PersonName, CharacterName, Job } from "./styled";
import BlankPicture from "../../common/PersonTile/BlankPicture.png";

const PersonTile = ({ posterImage, personName, characterName, job }) => {
  return (
    <Wrapper>
      {posterImage ? (
        <Img src={posterImage} alt="Person poster" />
      ) : (
        <Img src={BlankPicture} alt="Placeholder photo" />
        
      )}
      <PersonName>{personName}</PersonName>
      {characterName && <CharacterName>{characterName}</CharacterName>}
      {job && <Job>{job}</Job>}
    </Wrapper>
  );
};

export default PersonTile;
