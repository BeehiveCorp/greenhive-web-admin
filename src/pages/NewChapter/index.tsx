import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts/UserContext';

import './styles.css';

export function NewChapter() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return (
    <section className="container" id="new-chapter-page">
      <h1>New Chapter</h1>
    </section>
  );
}
