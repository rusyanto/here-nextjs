import Map from '../components/Map';
import React, { useState } from 'react';

// const apikey= process.env.HERE_APIKEY!;
// console.log("process.env.HERE_APIKEY");
// console.log("HERE");
const apikey= process.env.HERE_APIKEY!;

export default function Home() {
  return (
    <div>
      <Map apikey={apikey} />
    </div>
  )
}
