import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { message } from 'antd';
import { FriendlyScreen } from './friendly-screen/friendly-screen';
import { Download } from './download-screen/download';

const DownloadScreen = () => {
  const isFormSubmitted = useSelector(
    (state: RootState) => state.form.isFormSubmitted
  );

  if (!isFormSubmitted) {
    message.error('Letterhead details not submitted.');
    return <FriendlyScreen />;
  } else {
    return <Download />;
  }
};

export { DownloadScreen };
