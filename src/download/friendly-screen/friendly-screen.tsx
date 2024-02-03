import { Button } from 'antd';
import styles from './friendly-screen.module.css';
import { useNavigate } from 'react-router-dom';

const FriendlyScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Return to Form</div>
        <div className={styles.message}>
          <span>
            Letterhead details have not been entered yet. <br />
            Please click the button to return to the form
          </span>
        </div>
        <Button
          className={styles.formButton}
          type="primary"
          onClick={() => navigate('/form')}
        >
          Return to Form
        </Button>
      </div>
    </>
  );
};

export { FriendlyScreen };
