import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './download.module.css';
import { Letterhead } from '../../letterhead/letterhead';
import { Button, message } from 'antd';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from 'react-router-dom';

const FriendlyScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.friendlyContainer}>
        <div className={styles.title}>Return to Form</div>
        <div className={styles.message}>
          <span>
            Letterhead details have not been entered yet. <br />
            Please click the button to return to the form
          </span>
        </div>
        <Button
          className={styles.friendlyButton}
          type="primary"
          onClick={() => navigate('/form')}
        >
          Return to Form
        </Button>
      </div>
    </>
  );
};

const DownloadScreen = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const formData = useSelector((state: RootState) => state.form.formData);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Letterhead
          ref={targetRef}
          salutation={formData.salutation}
          body={formData.message}
          signature={formData.signature}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.header}>Download</div>
        <Button
          onClick={useReactToPrint({
            content: () => targetRef.current,
            onAfterPrint: () => {
              message.success('Download Successful!');
              navigate('/');
            },
          })}
          type="primary"
          className={styles.formButton}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

const Download = () => {
  const isFormSubmitted = useSelector(
    (state: RootState) => state.form.isFormSubmitted
  );

  if (!isFormSubmitted) {
    message.error('Letterhead details not submitted.');
    return <FriendlyScreen />;
  } else {
    return <DownloadScreen />;
  }
};

export { Download };
