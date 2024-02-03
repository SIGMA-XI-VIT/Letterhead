import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LetterheadForm } from './letterhead-form/form';
import { DownloadScreen } from './download/download-container';
import { Intro } from './intro/intro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/form" element={<LetterheadForm />} />
      <Route path="/download" element={<DownloadScreen />} />
      <Route path="*" element={<Intro />} />
    </Routes>
  );
}

export default App;
