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

  const filteredData = [];
    
  for(let i=0; i<100; i++) {
    const obj = {}
    obj.txId = 'Txn' + i;
    obj.description = 'desc';
    obj.category = categories.current[Math.floor(Math.random()*7)];
    obj.amount = Math.floor(Math.random()*1000);
    obj.type = Math.floor(Math.random()*2) === 1 ? 'C' : 'D';
    filteredData.push(obj);
  }

  return (
    <div className="app">
      <Header />
      <div className='content'>
        <EntryPage categories={categories.current}/>
        <div className='rightPane'>
          <FilterPage categories={categories.current}/>
          <div className='bottomPane'>
            <ExpensePage filteredData={filteredData}/>
            <AnalysisPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
