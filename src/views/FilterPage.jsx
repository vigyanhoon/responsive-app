import React from 'react';
import '../css/FilterPage.scss';

export default function FilterPage({ categories }) {
  return (
    <div className='filterPage card'>
      <div className='header cardHeader'>
        View Transactions
      </div>
      <div className='content'>
        <form>
          <label>
            Frequency
            <select required defaultValue=''>
              <option hidden value=''>select</option>
              <option value='current'>Current</option>
              <option value='monthly'>Monthly</option>
            </select>
          </label>
          <label>
            Month
            <input type='date' name='name' />
          </label>
          <label>
            Category
            <select defaultValue=''>
              <option hidden value=''>select</option>
              {categories.map(category =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}
