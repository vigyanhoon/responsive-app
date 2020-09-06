import React from 'react';
import { useRef } from 'react';
import './css/App.scss';
import Header from './views/Header';
import Footer from './views/Footer';
import EntryPage from './views/EntryPage';
import FilterPage from './views/FilterPage';
import ExpensePage from './views/ExpensePage';
import AnalysisPage from './views/AnalysisPage';

function App() {
  const categories = useRef(['Medical', 'Travel', 'Loans',
    'Utility Bills', 'Education', 'Shopping', 'Misc']);

  return (
    <div className="app">
      <Header />
      <div className='content'>
        <EntryPage categories={categories.current} />
        <div className='rightPane'>
          <FilterPage categories={categories.current} />
          <div className='bottomPane'>
            <ExpensePage />
            <AnalysisPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
