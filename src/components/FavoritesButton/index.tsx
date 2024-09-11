'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';

export default function FavoritesButton() {
  const pathname = usePathname();
  return (
    <Link
      className={pathname === '/favorites' ? styles.active : ''}
      href={{ pathname: '/favorites' }}
    >
      Favorites
    </Link>
  );
}
