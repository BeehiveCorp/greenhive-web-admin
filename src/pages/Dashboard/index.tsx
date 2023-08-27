import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts/UserContext';

import './styles.css';

export function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return (
    <section className="container" id="dashboard-page">
      <h1>Dashboard</h1>
    </section>
  );
}
