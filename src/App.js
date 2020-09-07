import React from 'react';
import { useRef, useState } from 'react';
import './css/App.scss';
import Header from './views/Header';
import Footer from './views/Footer';
import EntryPage from './views/EntryPage';
import FilterPage from './views/FilterPage';
import ExpensePage from './views/ExpensePage';
import AnalysisPage from './views/AnalysisPage';
import { sortByDate } from './Utils';

function App() {
  const categories = useRef(['Medical', 'Travel', 'Loans',
    'Utility Bills', 'Education', 'Shopping', 'Misc']);
  const [filteredData, setFilteredData] = useState([]);
  const [last10Transactions, setLast10Transactions] = useState([]);
  const [transactionNo, setTransactionNo] = useState(0);
  const [allTransactions, setAllTransactions] = useState({});
  const [balance, setBalance] = useState(0);

  const addTransaction = (transaction) => {
    transaction.amount = parseFloat(transaction.amount);

    if (transaction.paymentType === 'Make payment' && balance < transaction.amount) {
      alert('You balance ' + balance + ' is insufficient for transfer of ' + transaction.amount);
      return;
    }

    if (transaction.paymentType === 'Receive payment') {
      setBalance(balance + transaction.amount);
    }
    else {
      setBalance(balance - transaction.amount);
    }

    transaction.txnId = transactionNo;
    transaction.txnDate = new Date(transaction.txnDate);
    setLast10(transaction);
    setAll(transaction);
    setTransactionNo(transactionNo + 1);
    alert('Success');
  }

  const setLast10 = (transaction) => {
    let tempTxns = [...last10Transactions];
    tempTxns.push(transaction);
    tempTxns = sortByDate(tempTxns, 'txnDate');
    tempTxns = tempTxns.slice(0, 10);
    setLast10Transactions(tempTxns);
  }

  const setAll = (transaction) => {
    let tempTxns = { ...allTransactions };
    const date = transaction.txnDate;
    const key = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2);
    tempTxns[key] = tempTxns[key] || [];
    tempTxns[key].push(transaction);
    setAllTransactions(tempTxns);
  }

  const filterData = (filter) => {
    let data;
    if (filter.frequency === 'current') {
      data = last10Transactions;
    }
    else {
      let key = filter.date;
      data = allTransactions[key] || [];
    }

    if (filter.category) {
      data = data.filter(item=>{
        return item.category === filter.category
      })
    }
    setFilteredData(data);
  }

  // for (let i = 0; i < 100; i++) {
  //   const obj = {}
  //   obj.txnId = 'Txn' + i;
  //   obj.description = 'desc';
  //   obj.category = categories.current[Math.floor(Math.random() * 7)];
  //   obj.amount = Math.floor(Math.random() * 1000);
  //   obj.paymentType = Math.floor(Math.random() * 2) === 1 ? 'Receive payment' : 'Make payment';
  //   filteredData.push(obj);
  // }

  return (
    <div className="app">
      <Header balance={balance} />
      <div className='content'>
        <EntryPage categories={categories.current} addTransaction={addTransaction} />
        <div className='rightPane'>
          <FilterPage categories={categories.current} filterData={filterData} />
          <div className='bottomPane'>
            <ExpensePage filteredData={filteredData} />
            <AnalysisPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
