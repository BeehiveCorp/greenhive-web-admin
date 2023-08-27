import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts/UserContext';

import './styles.css';

export function Login() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  return (
    <section className="container" id="login-page">
      Login
    </section>
  );
}
