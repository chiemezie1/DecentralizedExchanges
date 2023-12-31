import React, { useState, useEffect } from 'react'
import { Input, Popover, Radio, Modal, meassage } from "antd"
import { ArrowDownOutlined, DownOutlined, SettingOutlined, } from "@ant-design/icons";
import TokenList from "../tokenList.json"
import axios from "axios";
import { useSendTransaction, useWaitForTransaction } from 'wagmi';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { sendTransaction } from 'web3/lib/commonjs/eth.exports';


function Swap() {
  const { address, isConnected } = useAccount()
  const [slippage, setSlippage] = useState(0.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(TokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(TokenList[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const [prices, setPrices] = useState("");

  // const [transDetails, setTransDetails] = useState({
  //   to: null,
  //   data: null,
  //   value: null,
  // });
  // const { data, SendTransaction } = useSendTransaction({
  //   request: {
  //     from: address,
  //     to: String(transDetails.to),
  //     data: String(transDetails.data),
  //     value: String(transDetails.value),
  //   }
  // })

  useEffect(() => {
    fatchPrices(TokenList[0].address, TokenList[1].address);
  }, [])


  function changeAmonut(e) {
    setTokenOneAmount(e.target.value);
    if (e.target.value && prices) {
      setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2));
    } else {
      setTokenTwoAmount(null);
    }
  }

  function handleSlippage(e) {
    setSlippage(e.target.value);
  }

  function switchToken() {
    setPrices(null);
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    setTokenTwo(one);
    setTokenOne(two);
    fatchPrices(two.address, one.address);
  }

  function openModal(asset) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function modifyToken(i) {
    setPrices(null);
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    if (changeToken === 1) {
      setTokenOne(TokenList[i]);
      fatchPrices(TokenList[i].address, tokenTwo.address);
    }
    else {
      setTokenTwo(TokenList[i]);
      fatchPrices(tokenOne.address, TokenList[i].address);
    }
    setIsOpen(false);
  }


  async function fetchDexSwap(){
    
  }

  async function fatchPrices(one, two) {
    const res = await axios.get(`http://localhost:3002/tokenPrice`, {
      params: { addressOne: one, addressTwo: two }
    })
    setPrices(res.data);
  }

  // useEffect(() => {
  //   if (transDetails.to && isConnected) {
  //     sendTransaction();
  //   }

  // }, [transDetails]);

  const settings = (
    <>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippage}>
          <Radio.Button value={0.5}>0.5</Radio.Button>
          <Radio.Button value={2.0}>2.0</Radio.Button>
          <Radio.Button value={3.5}>3.5</Radio.Button>
          <Radio.Button value={5}>5.0</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title="select Token"
      >
        <div className='modalContent'>
          {TokenList?.map((e, i) => {
            return (
              <div className='tokenChoice' key={i} onClick={() => modifyToken(i)}>
                <img src={e.img} alt={e.ticker} className='tokenLogo' />
                <div className='tokenChoiceName'>
                  <div className='tokenName'>{e.name}</div>
                  <div className='tokenTicker'>{e.ticker}</div>
                </div>
              </div>
            )
          })}
        </div>

      </Modal>

      <div className='tradeBox'>
        <div className='tradeBoxHeader'>
          <h4>Swap</h4>
          <Popover
            title="Settings"
            trigger="click"
            placement='bottomRight'
            content={settings}
          >
            <SettingOutlined className='cog' />
          </Popover>
        </div>
        <div className='inputs'>
          <Input placeholder='0' value={tokenOneAmount} onChange={changeAmonut} disabled={!prices} />
          <Input placeholder='0' value={tokenTwoAmount} disabled={true} />
          <div className='switchButton' onClick={switchToken}>
            <ArrowDownOutlined className='switchArrow' />
          </div>
          <div className='assetOne' onClick={() => openModal(1)}>
            <img src={tokenOne.img} alt='TokenOneLogo' className='assetLogo' />
            {tokenOne.ticker}
            <DownOutlined />
          </div>
          <div className='assetTwo' onClick={() => openModal(2)}>
            <img src={tokenTwo.img} alt='TokenOneLogo' className='assetLogo' />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>
        <div className='swapButton' disabled={!tokenOneAmount || isConnected}>Swap</div>
      </div>
    </>
  )
}

export default Swap