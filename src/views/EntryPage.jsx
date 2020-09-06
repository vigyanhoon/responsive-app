import React from 'react';
import {useRef} from 'react';
import '../css/EntryPage.scss';

export default function EntryPage({categories}) {
  return (
    <div className='entryPage card'>
      <div className='header cardHeader'>
        Make / Receive Payments
      </div>
      <div className='content'>
        <form>
          <label>
            Amount
            <input type="number" name="name" />
          </label>
          <br />
          <label>
            Date
            <input type="date" name="name" />
          </label>
          <br />
          <label>
            Payment Type
            <select>
              <option value="make">Make payment</option>
              <option value="receive">Receive payment</option>
            </select>
          </label>
          <br />
          <label>
            Category
            <select>
              { categories.map(category=>
                <option value={category}>{category}</option>
              )}
            </select>
          </label>
          <br />
          <label>
            Description
            <input type="text" name="name" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
