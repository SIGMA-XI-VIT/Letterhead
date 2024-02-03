import { Button } from 'antd';
import styles from './intro.module.css';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Sigma-Xi Letterhead</div>
        <div className={styles.messageContainer}>
          <ul className={styles.message}>
            <li>
              This site generates a PDF letterhead for Chapter communications.
            </li>
            <li>
              Steps for use:
              <ul className={styles.steps}>
                <li>
                  Click on the button below to navigate to the Letterhead form.
                </li>
                <li>
                  Enter the salutation text (eg: To: Dr. Akella Sivaramakrishna,
                  SAS).
                </li>
                <li>Enter the message body.</li>
                <li>Enter the salutation text (eg: Yours sincerely, etc).</li>
                <li>Submit the form to generate the Letterhead PDF.</li>
              </ul>
            </li>
          </ul>
          <Button
            className={styles.formButton}
            type="primary"
            onClick={() => navigate('/form')}
          >
            To Letterhead Form
          </Button>
        </div>
      </div>
    </>
  );
};

export { Intro };
