import logo from '../../../logo.svg';
import styles from './Spinner.module.scss';

export const Spinner = () => {
  return <img alt="Spinner" className={styles.spinner} src={logo} />;
};
