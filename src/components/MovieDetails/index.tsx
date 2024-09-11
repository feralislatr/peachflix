'use client';
import { MovieDetail } from '@/types/MovieData';
import DetailCardContent from './DetailCardContent';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

type MovieDetailsProps = {
  movie: MovieDetail;
};

/** Render Movie Details Modal for parallel route */
export default function MovieDetails({ movie }: MovieDetailsProps) {
  const { Poster } = movie;
  const router = useRouter();

  /** Return to previous page onkeypress Esc */
  const handleBack = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    e.currentTarget.close();
    router.back();
  };

  /** Return to previous page when backdrop is clicked */
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == document.querySelector('#backdrop')) {
      document.querySelector('dialog')?.close();
      router.back();
    }
  };

  return (
    <div id="backdrop" className={styles.backdrop} onClick={e => handleBackdropClick(e)}>
      <dialog open className={styles.dialog} onKeyDown={e => e.key === 'Escape' && handleBack(e)}>
        <div className={styles['movie-details']}>
          <div className={styles['movie-card']} style={{ backgroundImage: `url(${Poster})` }}>
            <DetailCardContent movie={movie} />
          </div>
        </div>
      </dialog>
    </div>
  );
}
