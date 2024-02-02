import { FC, ReactNode, forwardRef } from 'react';
import styles from './letterhead.module.css';

interface LetterheadProps {
  salutation: string | ReactNode;
  body: string | ReactNode;
  signature: string | ReactNode;
}

const Letterhead: FC<LetterheadProps> = forwardRef((props, ref: any) => {
  const { salutation, body, signature } = props;

  return (
    <div ref={ref} className={styles.letterheadContainer}>
      <div className={styles.background} />
      <div className={styles.salutation}>{salutation}</div>
      <div className={styles.body}>{body}</div>
      <div className={styles.signature}>{signature}</div>
    </div>
  );
});

export { Letterhead };
