import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="peachflix"
          width={159}
          height={40}
          priority
        />
        <input className={styles.input} type="text" placeholder="Search" />
      </main>
    </div>
  );
}
