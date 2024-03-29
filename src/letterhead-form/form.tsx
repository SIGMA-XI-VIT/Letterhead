import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';
import { Button, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { submitForm } from '../store';

interface FormValues {
  salutation: string;
  message: string;
  signature: string;
}

const LetterheadForm = () => {
  const navigate = useNavigate();
  const [downloadForm] = Form.useForm();
  const dispatch = useDispatch();

  const handleFinish = (values: FormValues) => {
    try {
      console.log('Received values:', values);
      dispatch(submitForm(values));
      navigate('/download');
    } catch {
      console.log('Error in generating letterhead');
    }
  };

  const handleFinishFailed = () => {
    message.error('Letterhead generation unsuccessful!');
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Sigma-Xi Letterhead</div>
      <Form
        form={downloadForm}
        name="downloadForm"
        layout="vertical"
        className={styles.form}
        requiredMark
        scrollToFirstError
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          label={<div className={styles.label}>Enter Salutation</div>}
          name="salutation"
          tooltip="To: Dr. Akella Sivaramakrishna, SAS"
          required
          rules={[{ required: true, message: 'Required Field.' }]}
        >
          <Input className={styles.formInput} />
        </Form.Item>
        <Form.Item
          label={<div className={styles.label}>Enter Message</div>}
          tooltip="Dear Sir/Ma'am etc"
          name="message"
          required
          rules={[{ required: true, message: 'Required Field.' }]}
        >
          <Input.TextArea className={styles.formInput} />
        </Form.Item>
        <Form.Item
          label={<div className={styles.label}>Enter Signature</div>}
          name="signature"
          required
          tooltip="Yours sincerely, etc"
          rules={[{ required: true, message: 'Required Field.' }]}
        >
          <Input.TextArea size="small" className={styles.formInput} />
        </Form.Item>
        <Button className={styles.formButton} htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export { LetterheadForm };
