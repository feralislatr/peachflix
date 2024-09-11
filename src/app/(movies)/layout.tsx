import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import appStyles from '../page.module.css';
import SearchBar from '@/components/SearchBar';
import FavoritesButton from '@/components/FavoritesButton';

type MoviesLayoutProps = Readonly<{
  children: React.ReactNode;
  movieDetailDialog?: React.ReactNode;
}>;

export default function MoviesLayout({ children, movieDetailDialog }: MoviesLayoutProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href={{ pathname: '/' }}>
          <Image
            className={appStyles.logo}
            src="/logo.svg"
            alt="peachflix"
            width={159}
            height={40}
            priority
          />
        </Link>
        <div className={styles.nav}>
          <Link href={{ pathname: '/' }}>Movies</Link>
          <FavoritesButton />
          <SearchBar />
        </div>
      </header>
      {movieDetailDialog}
      {children}
    </div>
  );
}
