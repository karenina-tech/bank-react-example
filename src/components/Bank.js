import React, { useState } from 'react';
import Card from './Card';

export default function Bank() {
  const [item, setItem] = useState({ title: '', amount: null });
  const [list, setList] = useState([]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setItem((state) => ({ ...state, [name]: value }));
  };

  const addItem = (event) => {
    event.preventDefault();
    handleDepositClick();
  };

  const handleDepositClick = () => {
    setList((state) => [...state, { ...item }]);
  };

  const handleWithDrawClick = () => {
    const negativeAmount = item.amount * -1;
    const name = item.title;

    setList((state) => [...state, { title: name, amount: negativeAmount }]);
  };

  //this is "derived state, or "computer" state
  const income = () => {
    return list.filter((item) => +item.amount > 0).reduce((acc, b) => acc + +b.amount, 0);
  };
  const outcome = () => {
    return list.filter((item) => +item.amount < 0).reduce((acc, b) => acc + +b.amount, 0);
  };
  const balance = () => {
    return income() + outcome();
  };

  return (
    <div>
      <h1 class='text-3xl pb-2 font-bold'>Bank</h1>
      <div class='grid grid-cols-3 mb-2 w-full max-w-sm'>
        <Card title='Income' number={income()}></Card>
        <Card title='Outcome' number={outcome()}></Card>
        <Card title='Balance' number={balance()}></Card>
      </div>

      <form
        onSubmit={(event) => addItem(event)}
        class='w-full max-w-sm shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div class='md:flex md:items-center mb-6'>
          <div class='md:w-1/3'>
            <label class='block text-gray-500 font-bold md:text-rigth mb-1 md:mb-0 pr-4' for='inline-item'>
              Item
            </label>
          </div>
          <div class='md:w-2/3'>
            <input
              class='bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-item'
              type='text'
              placeholder='item'
              name='title'
              value={item.title}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
        <div class='md:flex md:items-center mb-6'>
          <div class='md:w-1/3'>
            <label class='block text-gray-500 font-bold md:text-rigth mb-1 md:mb-0 pr-4' for='inline-amount'>
              Amount
            </label>
          </div>
          <div class='md:w-2/3'>
            <input
              class='bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-amount'
              type='text'
              placeholder='amount'
              name='amount'
              value={item.amount}
              onChange={(event) => handleInputChange(event)}
            />
          </div>
        </div>
        <div class='md:flex'>
          <div class='md:w-1/3'></div>
          <div class='md:w-1/3'>
            <button
              onClick={handleDepositClick}
              class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2'
              type='button'>
              Deposit
            </button>
          </div>
          <div class='md:w-1/3'>
            <button
              onClick={handleWithDrawClick}
              class='md:text-rigth mb-1 md:mb-0 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded'
              type='button'>
              Withdraw
            </button>
          </div>
        </div>
      </form>

      <table class='w-full table-fixed max-w-sm shadow-sm rounded mb-4'>
        <thead class='grid-cols-1 divide-y divide-purple-700'>
          <tr>
            <th class='text-center'>Item</th>
            <th class='text-center'>Amount</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody class='grid-cols-1 divide-y divide-purple-300'>
          {list.map((item, i) => (
            <tr key={i}>
              <td class='text-center'>{item.title}</td>
              <td class='text-center'> {item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class='md:flex '>
        <p class=' md:text-center text-gray-500 text-xs'>&copy;2021 Karenina. All rights reserved.</p>
      </div>
    </div>
  );
}
