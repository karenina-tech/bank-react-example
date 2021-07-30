import React from 'react';
import ColorNumber from './ColorNumber';

export default function Card({ number, title }) {
  return (
    <div>
      <div class='card card-body bg-purple-100 m-2 items-center'>
        <div class='font-small'>{title}</div>
        <span class='text-2xl'>
          <ColorNumber number={number}></ColorNumber>€
        </span>
      </div>
    </div>
  );
}
