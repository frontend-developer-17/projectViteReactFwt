import IconSearchLight from '../assets/IconSearchLight.svg';
import IconCloseDark from '../assets/IconCloseDark.svg';
import IconCloseLight from '../assets/IconCloseLight.svg';
import styles from '../scss/Home.module.scss';
import { useTheme } from '../hooks/themeProvider';
type Props = {
  value: string;
  setValue(e: string): void;
};
export const SearchPaitings: React.FC<Props> = ({ value, setValue }) => {
  const { theme } = useTheme();
  const lightTheme = theme === 'light' ? ' ' + styles.light : '';
  return (
    <div className={styles.paidingInputWrapper}>
      <input
        value={value}
        className={styles.paidingInput + lightTheme}
        placeholder="Paiding Title"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <img className={styles.paidingSearchIcon} src={IconSearchLight} alt="" />
      {value && (
        <img
          onClick={() => setValue('')}
          className={styles.paidingCloseIcon}
          src={lightTheme ? IconCloseDark : IconCloseLight}
          alt=""
        />
      )}
    </div>
  );
};
