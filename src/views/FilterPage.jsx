import React, { useEffect } from 'react';
import {useState} from 'react';
import '../css/FilterPage.scss';

export default function FilterPage({ categories, filterData }) {
  const initialState = {
    frequency: '',
    date: '',
    category: ''
  }

  const [state, setState] = useState(initialState);

  const onChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    setState({ ...state, [name]: value });
  }

  useEffect(()=>{
    filterData(state);
  },[state.frequency, state.date, state.category]);

  return (
    <div className='filterPage card'>
      <div className='header cardHeader'>
        View Transactions
      </div>
      <div className='content'>
        <div>
          <label>
            Frequency
            <select required value={state.frequency} onChange={onChange} name='frequency'>
              <option hidden value=''>select</option>
              <option value='current'>Current</option>
              <option value='monthly'>Monthly</option>
            </select>
          </label>
          <label>
            Month
            <input disabled={state.frequency!=='monthly'} type='month' value={state.date}
              onChange={onChange} name='date'/>
          </label>
          <label>
            Category
            <select value={state.category} onChange={onChange} name='category'>
              <option value=''>select</option>
              {categories.map(category =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
