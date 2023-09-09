import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';

import { useUser } from '@/contexts/UserContext';
import { useTheme } from '@/contexts/ThemeContext';

import { Greenhive } from '@/components/Greenhive';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import './styles.scss';

export function Login() {
  const { user, login } = useUser();
  const { palette } = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState('almeida@gmail.com');
  const [password, setPassword] = useState('12345678');

  useEffect(() => {
    if (user?.id) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-page">
      <header>
        <Greenhive.Horizontal color={palette.title} />
      </header>

      <section className="container login-page__content">
        <form onSubmit={onFormSubmit}>
          <span className="login-page__content__subtitle">olá, administrador</span>
          <h4 className="login-page__content__title">Faça login para administrar</h4>
          <Input
            label="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="solid"
              primary
              RightIcon={() => <BiRightArrowAlt size={32} color={palette.primary} />}
              style={{ width: '48px', padding: 0, marginTop: '24px' }}
              onClick={onFormSubmit}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
