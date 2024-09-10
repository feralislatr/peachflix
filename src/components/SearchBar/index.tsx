'use client';
import { useRouter, usePathname } from 'next/navigation';
import styles from './styles.module.css';

/** Render Search Bar
 * Navigate to Search page on Submit
 */
export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();

  // create search params from search query and navigate on submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = encodeURIComponent(formData.get('search') as string);

    router.push(`/search?s=${query}&page=1`);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        className={styles.input}
        style={pathname === '/search' ? { backgroundColor: 'black' } : {}}
        type="text"
        placeholder="Search"
        name="search"
      />
    </form>
  );
}
