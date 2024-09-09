'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './styles.module.css';

/** Render Pagination for Search page */
export default function Pagination({ totalResults }: { totalResults: number }) {
  const { replace } = useRouter();

  // get current params from the path
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const [page, setPage] = useState(Number(params.get('page')) || 1);

  useEffect(() => {
    const updatedParams = new URLSearchParams({
      s: params.get('s') || '',
      page: page.toString(),
    });
    // update path with new params
    const updatedPath = `${pathname}?${updatedParams}`;
    replace(updatedPath);
  }, [page]);

  const resultCount = totalResults <= 10 ? totalResults : page * 10;
  const totalPages = Math.ceil(totalResults / 10);

  const handleNext = () => {
    if (page === totalPages) return;
    setPage(prev => prev + 1);
  };
  const handlePrevious = () => {
    if (page === 1) return;
    setPage(prev => (prev > 1 ? prev - 1 : 1));
  };
  const handlePageSelect = (pageNo: number) => {
    if (pageNo === page) return;
    setPage(pageNo);
  };

  // render page select buttons
  const renderPageNos = (maxPage: number) => {
    const pageButtons = Array.from({ length: maxPage }, (_, i) => i + 1);
    return (
      <>
        {pageButtons.map(i => (
          <button key={`page-${i}`} onClick={() => handlePageSelect(i)}>
            <div className={i === page ? styles['active'] : ''}>{i}</div>
          </button>
        ))}
      </>
    );
  };
  return (
    <div className={styles['pagination-container']}>
      <div className={styles['button-group']}>
        <button
          className={styles['previous-button']}
          onClick={handlePrevious}
          disabled={page === 1}
        >
          {`<`}
        </button>
        {renderPageNos(totalPages <= 6 ? totalPages : 6)}
        <button className={styles['next-button']} onClick={handleNext}>{`>`}</button>
      </div>
      <div>{`${resultCount} of ${totalResults} results`}</div>
    </div>
  );
}
