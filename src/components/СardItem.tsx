import {
  BaseUrl,
  type TPaitings,
  type TAuthors,
  type TLocations,
} from '../types';
import styles from '..//scss/CardList.module.scss';
import { useTheme } from '../hooks/themeProvider';
import { useState } from 'react';

type Props = {
  painting: TPaitings;
  authors: TAuthors[] | undefined;
  locations: TLocations[] | undefined;
};
export const CardItem: React.FC<Props> = ({ painting, authors, locations }) => {
  const { theme } = useTheme();
  const [loadImage, setLoadIOmage] = useState(true);

  const location =
    locations &&
    locations.find((location) => location.id === painting.locationId)?.location;
  const author =
    authors && authors.find((author) => author.id === painting.authorId)?.name;

  const isLightTheme = theme === 'light' ? ' ' + styles.light : '';
  const load = loadImage ? ' ' + styles.loadImage : '';

  return (
    <div className={styles.cardItem + load} key={painting.id}>
      <img
        rel="preload"
        className={styles.cardImage}
        src={`${BaseUrl[0]}${painting.imageUrl}`}
        alt={painting.name}
        style={{ backgroundColor: 'lightgray' }}
        onLoad={() => setLoadIOmage(false)}
        loading="lazy"
      />
      {!loadImage && (
        <div className={styles.cardInfoWrapper + isLightTheme}>
          <div className={styles.cardInfoBlock + isLightTheme}>
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
      )}
    </div>
  );
};
