import {
  BaseUrl,
  type TPaitings,
  type TAuthors,
  type TLocations,
} from '../types';
import styles from '..//scss/CardList.module.scss';
import { useTheme } from '../hooks/themeProvider';

type Props = {
  painting: TPaitings;
  authors: TAuthors[] | undefined;
  locations: TLocations[] | undefined;
};
export const CardItem: React.FC<Props> = ({ painting, authors, locations }) => {
  const location = locations &&locations.find((location) => location.id === painting.locationId)?.location;
  const author = authors && authors.find((author) => author.id === painting.authorId)?.name;
  const { theme } = useTheme();
  const isLightTheme = theme === 'light' ? ' ' + styles.light : '';
  return (
    <div className={styles.cardItem} key={painting.id}>
      <img
        className={styles.cardImage}
        src={`${BaseUrl[0]}${painting.imageUrl}`}
        alt={painting.name}
        style={{ backgroundColor: 'lightgray' }}
      />

      <div className={styles.cardInfoWrapper + isLightTheme}>
        <div className={styles.cardInfoBlock + isLightTheme}>
          <div className={''}>
            <div className={styles.cardInfoNoHover}>
              <span className={styles.paragraphBigMedium + isLightTheme}>
                {painting.name}
              </span>
              <div className={styles.cardInfoDate + isLightTheme}>
                {painting.created}
              </div>
            </div>

            <div className={styles.cardInfoHover}>
              <span className={styles.paragraphBigMedium + isLightTheme}>
                {author}
              </span>
              <div className={styles.cardInfoDate + isLightTheme}>
                {location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
