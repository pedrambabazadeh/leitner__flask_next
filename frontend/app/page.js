'use client';

import React from 'react'
import { useEffect, useState } from 'react'


function page() {

  const [backData, setBackData] = useState()
  useEffect(
    () => {
      fetch('http://localhost:8080/api/home')
      .then (res=> res.json())
      .then (data => setBackData(data.message))
    }, []
  )
    return (
      <div>The front shows: {backData}</div>
    )
}

export default page