import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LetterheadForm } from './letterhead-form/form';
import { DownloadScreen } from './download/download-container';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LetterheadForm />} />
      <Route path="/download" element={<DownloadScreen />} />
    </Routes>
  );
}

export default App;
