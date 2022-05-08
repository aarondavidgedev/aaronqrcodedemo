import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QRCode from "react-qr-code";
import React, {useState} from "react";


export default function Home() {

  const [value, setValue] = useState('');

  return (

    <div className="form_container">
        <input type="text" placeholder='Enter Value' onChange={e => setValue(e.target.value)}  />
        <div className="qr_form_container">
          <QRCode value={value} />
        </div>
    </div>

  )
}
