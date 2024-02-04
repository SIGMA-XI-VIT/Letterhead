import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LetterheadForm } from './letterhead-form/form';
import { Intro } from './intro/intro';
import { Download } from './download/download-screen/download';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/form" element={<LetterheadForm />} />
      <Route path="/download" element={<Download />} />
      <Route path="*" element={<Intro />} />
    </Routes>
  );
}

export default App;
