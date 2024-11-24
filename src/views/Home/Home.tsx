import { Card } from '@/components';
import styles from './home.module.css';

const HomeView = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>{'Home'}</h1>
      <Card number="12345" />
    </div>
  );
};

export default HomeView;
