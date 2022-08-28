import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles.jsx";

export default function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const navigation = useNavigate();

  const onNavigationHandler = () => navigation(route);

  return (
    <DirectoryItemContainer onClick={onNavigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
