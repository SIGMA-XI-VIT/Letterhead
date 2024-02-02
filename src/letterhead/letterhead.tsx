import { FC, ReactNode, forwardRef } from 'react';
import styles from './letterhead.module.css';

interface LetterheadProps {
  salutation: string | ReactNode;
  body: string | ReactNode;
  signature: string | ReactNode;
  ref?: any;
}

const Letterhead: FC<LetterheadProps> = forwardRef((props, ref: any) => {
  const { salutation, body, signature } = props;

  return (
    <div ref={ref} className={styles.letterheadContainer}>
      <div className={styles.salutation}>
        <pre>{salutation}</pre>
      </div>
      <div className={styles.body}>
        <pre>{body}</pre>
      </div>
      <div className={styles.signature}>
        <pre>{signature}</pre>
      </div>
    </div>
  );
});

export { Letterhead };
