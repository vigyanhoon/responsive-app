import React from 'react';
import '../css/ExpensePage.scss';

export default function ExpensePage(props) {
  return (
    <div className='expensePage card'>
      <div className='header cardHeader'>
        Expenditure
      </div>
      <div className='content'>
        <table>
          <tbody>
            <tr key='head'>
              <th>Tx ID</th>
              <th>Desc</th>
              <th>Category</th>
              <th>Amount</th>
              <th>D/C</th>
            </tr>
            {
              props.filteredData.map(data =>
                <tr key={data.txId}>
                  <td>{data.txId}</td>
                  <td>{data.description}</td>
                  <td>{data.category}</td>
                  <td>{data.amount}</td>
                  <td>{data.type}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
