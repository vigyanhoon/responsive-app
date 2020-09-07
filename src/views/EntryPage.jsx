import React from 'react';
import { useState, useRef } from 'react';
import '../css/EntryPage.scss';

export default function EntryPage({ categories, addTransaction }) {
  const paymentType = useRef(['Make payment', 'Receive payment']);

  const initialState = {
    amount: '',
    txnDate: '',
    paymentType: '',
    category: '',
    description: ''
  }

  const [state, setState] = useState(initialState);

  const saveEntry = (event) => {
    event.preventDefault();
    addTransaction(state);
    setState(initialState)
  }

  const onChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    
    if (name === 'amount') value = value.replace(/[^0-9.]/g, '');

    setState({ ...state, [name]: value });
  }

  return (
    <div className='entryPage card'>
      <div className='header cardHeader'>
        Make / Receive Payments
      </div>
      <div className='content'>
        <form onSubmit={saveEntry}>
          <label>
            Amount
            <input type='text' value={state.amount} min='1' onChange={onChange} required name='amount' />
          </label>
          <br />
          <label>
            Date
            <input type='date' value={state.txnDate} onChange={onChange} name='txnDate' required />
          </label>
          <br />
          <label>
            Payment Type
            <select value={state.paymentType} onChange={onChange} required name='paymentType'>
              <option hidden value="">select</option>
              {paymentType.current.map(type =>
                <option key={type} value={type}>{type}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Category
            <select value={state.category} onChange={onChange} required name='category'>
              <option hidden value="">select</option>
              {categories.map(category =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Description
            <input type='text' value={state.description} name='description' onChange={onChange} maxLength='15' required />
          </label>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}
