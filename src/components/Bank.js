import React, { useState } from 'react';

export default function Bank() {
  const [item, setItem] = useState({ title: '', amount: 0 });
  const [list, setList] = useState([]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setItem((state) => ({ ...state, [name]: value }));
  };

  return (
    <div>
      <h1 class='text-3xl pb-2'>Bank</h1>
      <form class='w-full max-w-sm shadow-md rounded px-8 pt-6 pb-8 mb-4'>
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
        <div class='md:flex md:items-center'>
          <div class='md:w-1/3'></div>
          <div class='md:w-2/3'>
            <button
              class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
              type='button'>
              Add Entry
            </button>
          </div>
        </div>
      </form>
      <div class='md:flex '>
        <p class=' md:text-center text-gray-500 text-xs'>&copy;2021 Karenina. All rights reserved.</p>
      </div>
    </div>
  );
}
