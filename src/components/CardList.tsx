import { type TPaitings } from '../types';
import styles from '..//scss/CardList.module.scss';
import ReactPaginate from 'react-paginate';
import { useEffect, useRef, useState } from 'react';
import { useFetchAuthors } from '../hooks/fetchAuthors';
import { useFetchLocations } from '../hooks/fetchLocation';
import { CardItem } from './СardItem';
import { useTheme } from '../hooks/themeProvider';

type Props = {
  isPending: boolean;
  paintings: TPaitings[] | undefined;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  value: string;
};

export const CardList: React.FC<Props> = ({
  isPending,
  paintings,
  setCurrentPage,
  currentPage,
  value,
}) => {
  const [authors] = useFetchAuthors();
  const [locations] = useFetchLocations();
  const [allPaitings, setAllPaitings] = useState<TPaitings[]>([]);
  const paintingsPerPage = 6;
  const lastPages = useRef<Record<string, boolean>>({});
  const [currentPaginatePage, setCurrentPaginatePage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState<TPaitings[]>([]);

  useEffect(() => {
    if (value === '' && !lastPages.current[currentPaginatePage]) {
      if (paintings && paintings.length > 0) {
        setAllPaitings((prev) => [...prev, ...paintings]);
        lastPages.current[currentPaginatePage] = true;
      }
    }
    if (value !== '' && paintings) {
      const currentDate = paintings.slice(0, 6);
      setCurrentPageData(currentDate);
    }
  }, [paintings]);

  useEffect(() => {
    if (value === '') {
      const currentData = allPaitings
        ? allPaitings.slice(
            (currentPage - 1) * paintingsPerPage,
            currentPage * paintingsPerPage,
          )
        : [];
      setCurrentPageData(currentData);
    }
  }, [allPaitings, currentPaginatePage, value]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPaginatePage(data.selected);
    setCurrentPage(data.selected + 1);
  };
  const { theme } = useTheme();
  const lightTheme = theme === 'light' ? ' ' + styles.light : '';

  // Условие для отображения "No matches" или данных
  const shouldShowNoMatches = !isPending && currentPageData.length === 0;
  // const shouldShowData = !shouldShowNoMatches && currentPageData.length > 0;

  if (isPending) {
    return <span className={styles.loading + lightTheme}>Loading...</span>;
  }

  return (
    <div>
      {shouldShowNoMatches ? (
        <div className={styles.noMatches}>
          <h1 className={styles.h1 + lightTheme}>No matches for Lorem</h1>
          <div className={styles.paragraphBase + lightTheme}>
            Please try again with a different spelling or keywords.
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.cardListWrapper}>
            {currentPageData.length > 0 &&
              currentPageData.map((painting) => (
                <CardItem
                  key={painting.id}
                  painting={painting}
                  authors={authors}
                  locations={locations}
                />
              ))}
          </div>
        </div>
      )}
      <div className={styles.paginateWrapper}>
        {!value && (
          <ReactPaginate
            className={styles.paginate + lightTheme}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={9}
            // marginPagesDisplayed={2}
            // pageRangeDisplayed={3}
            forcePage={currentPaginatePage}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            activeLinkClassName={styles.activeLink + lightTheme}
          />
        )}
      </div>
    </div>
  );
};
