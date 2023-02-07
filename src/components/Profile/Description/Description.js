import {
  DescriptionCss,
  ImgCss,
  NameCss,
  TagCss,
  LocationCss,
} from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionCss className="description">
      <ImgCss src={avatar} alt={username} className="avatar" />
      <NameCss className="name">{username}</NameCss>
      <TagCss className="tag">@{tag}</TagCss>
      <LocationCss className="location">{location}</LocationCss>
    </DescriptionCss>
  );
};
