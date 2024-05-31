import styles from './page.module.css';
import LoginPage from './components/loginPage/loginPage';
import TodoPage from './components/todoPage/todoPage';
import Example from './components/example';

export default function Home() {
  return (
    <main className={styles.main}>
      <Example />
    </main>
  );
}
