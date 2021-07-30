import React from 'react';

export default function ColorNumber({ number }) {
  return <span class={number > 0 ? 'text-purple-500' : 'text-pink-500'}>{number}</span>;
}
