'use client';
import { MovieDetail } from '@/types/MovieData';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const renderCardContent = ({
  Title,
  Plot,
  Runtime,
  Rated,
  Metascore,
  Actors,
  Genre,
}: MovieDetail) => {
  const totalMinutes = Number(Runtime.split(' ')[0]);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = hours > 0 ? (totalMinutes - hours * 60) % 60 : totalMinutes % 60;
  const runtime = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  return (
    <div className={styles['card-content']}>
      <h1>{Title}</h1>
      <p>{Plot}</p>
      <div className={styles.stats}>
        <div>{Metascore}%</div>
        <div>|</div>
        <div>{runtime}</div>
        <div className={styles.rated}>{Rated}</div>
      </div>
      <div className={styles['button-group']}>
        <button className={styles.watch}>Start watching</button>
        <button className={styles.favorite}>★ Add to favorites</button>
      </div>
      <p>
        <span className={styles['semi-bold']}>Cast:</span> {Actors}
        <br />
        <span className={styles['semi-bold']}>Genre:</span> {Genre}
      </p>
    </div>
  );
};

export default function MovieDetails({ movie }: { movie: MovieDetail }) {
  const { Poster } = movie;
  const router = useRouter();

  const handleBack = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    e.currentTarget.close();
    router.back();
  };

  return (
    <div className={styles.backdrop}>
      <dialog open className={styles.dialog} onKeyDown={e => e.key === 'Escape' && handleBack(e)}>
        <div className={styles['movie-details']}>
          <div className={styles['movie-card']} style={{ backgroundImage: `url(${Poster})` }}>
            {renderCardContent(movie)}
          </div>
        </div>
      </dialog>
    </div>
  );
}
