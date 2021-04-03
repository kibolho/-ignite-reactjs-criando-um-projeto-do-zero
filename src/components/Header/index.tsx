import Link from 'next/link';
import styles from './header.module.scss';

const Header: React.FC = () => (
  <header className={styles.headerContainer}>
    <Link href="/">
      <img src="/images/logo.svg" alt="logo" />
    </Link>
  </header>
);

export default Header;
