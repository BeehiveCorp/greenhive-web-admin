import { useUser } from '@/contexts/UserContext';
import { getInitials } from '@/utils';

import { AvatarProps } from './types';

import './styles.scss';

const Avatar: React.FC<AvatarProps> = ({ size = 24, style }) => {
  const { user } = useUser();

  return (
    <div
      className="avatar"
      style={{ height: `${size}px`, width: `${size}px`, ...style }}
    >
      {user?.avatar_url ? (
        <img src={user.avatar_url} alt="Foto do usuário" />
      ) : (
        <span>{getInitials(user?.name ?? '')}</span>
      )}
    </div>
  );
};

export { Avatar };
