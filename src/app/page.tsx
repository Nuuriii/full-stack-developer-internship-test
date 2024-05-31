import styles from './page.module.css';
import LoginPage from './components/loginPage/loginPage';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Haloo</h1>
      <LoginPage />
    </main>
  );
}
