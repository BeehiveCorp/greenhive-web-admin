import { useUser } from '@/contexts/UserContext';
import { getInitials, getRelativeUri } from '@/utils';

import { AvatarProps } from './types';

import './styles.scss';

const Avatar: React.FC<AvatarProps> = ({
  size = 24,
  uri,
  name,
  containerStyle,
  initialsStyle,
}) => {
  const { user } = useUser();

  const avatarUrl = uri || user?.avatar_url;
  const nameWhenNoAvatar = name || user?.name;

  return (
    <div
      className="avatar"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        minHeight: `${size}px`,
        minWidth: `${size}px`,
        ...containerStyle,
      }}
    >
      {avatarUrl ? (
        <img src={getRelativeUri(avatarUrl)} alt="Foto do usuário" />
      ) : (
        <span style={initialsStyle}>{getInitials(nameWhenNoAvatar ?? '')}</span>
      )}
    </div>
  );
};

export { Avatar };
