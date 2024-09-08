'use client';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';

export default function SearchBar() {
  const router = useRouter();

  // create search params from search query and navigate on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = encodeURIComponent(formData.get('search') as string);

    router.push(`/search?s=${query}&page=1`);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input className={styles.input} type="text" placeholder="Search" name="search" />
    </form>
  );
}
