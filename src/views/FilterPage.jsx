import React from 'react';
import { useState } from 'react';
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
            <select>
              <option value="current">Current</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>
          <label>
            Month
            <input type="date" name="name" />
          </label>
          <label>
            Category
            <select>
              {categories.map(category =>
                <option value={category}>{category}</option>
              )}
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}
