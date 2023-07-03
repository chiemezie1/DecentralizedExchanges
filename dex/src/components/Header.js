import "../App.css";
import React from 'react'
import logo from "../moralis-logo.svg"
import Eth from "../eth.svg"
import { Link } from "react-router-dom"
function Header() {
  function connect() {

  }
  return (
    <div>
      <div className='leftH'>
        <img src={logo} alt='logo' className='logo' />
        <Link to="/" className='link'>
          <div className='headerItem'>Swap</div>
        </Link>
        <Link to="tokens" className='link'>
          <dic className="headerItem">Tokens</dic>
        </Link>

      </div>

      <div className='rightH'>
        <div className='headerItem'>
          <img className='eth' src={Eth} />
          Ethereum
        </div>
        <button className='connectButton' onClick={connect}>
          connect
        </button>
      </div>
    </div>
  )
}

export default Header