import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage
        //Styled Component
        imageUrl={imageUrl}
        //scss
        // style={{
        //   backgroundImage: `url( ${imageUrl})`,
        // }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;