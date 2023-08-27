import { useTheme } from '@/contexts/ThemeContext';

import './styles.css';

export function Login() {
  const { theme, toggle } = useTheme();

  return (
    <section className="container" id="login-page">
      <p>theme: {theme}</p>
      <button onClick={toggle}>toggle</button>
    </section>
  );
}
