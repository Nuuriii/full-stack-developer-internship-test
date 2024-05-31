import styles from './page.module.css';
import LoginPage from './components/loginPage/loginPage';
import TodoPage from './components/todoPage/todoPage';

export default function Home() {
  return (
    <main className={styles.main}>
      <TodoPage />
    </main>
  );
}
