import { Container, Flex, Avatar, ListFollows, Location } from "./styles";
import { TUserProps } from "./types";

const UserData: React.FC<TUserProps> = ({
  username,
  name,
  avatarUrl,
  following,
  followers,
  location,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={name} />
        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <ListFollows>
        <li>
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </ListFollows>

      <Location>{location && <span>{location}</span>}</Location>
    </Container>
  );
};

export default UserData;
