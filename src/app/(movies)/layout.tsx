import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import appStyles from '../page.module.css';
import SearchBar from '@/components/SearchBar';

export default function MoviesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Link href={{ pathname: '/Movies' }}>Movies</Link>
        <Link href={{ pathname: '/favorites' }}>Favorites</Link>
        <SearchBar />
      </header>
      {children}
    </div>
  );
}
