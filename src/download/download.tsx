import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from './download.module.css';
import { Letterhead } from '../letterhead/letterhead';
import { message } from 'antd';
import { FriendlyScreen } from './friendly-screen/friendly-screen';

const Download = () => {
  const formData = useSelector((state: RootState) => state.form.formData);
  const isFormSubmitted = useSelector(
    (state: RootState) => state.form.isFormSubmitted
  );

  if (!isFormSubmitted) {
    message.error('Letterhead details not submitted.');
    return <FriendlyScreen />;
  }

  return (
    <div className={styles.container}>
      <h1>Download</h1>
      <Letterhead
        salutation={formData.salutation}
        body={formData.message}
        signature={formData.signature}
      />
    </div>
  );
};

export { Download };
