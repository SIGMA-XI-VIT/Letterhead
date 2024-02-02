import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LetterheadForm } from './letterhead-form/form';
import { Download } from './download/download';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LetterheadForm />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}

export default App;
