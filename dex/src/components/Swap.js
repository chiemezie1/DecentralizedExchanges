import React, { useState, useEffect } from 'react'
import { Input, Popover, Radio, Modal, meassage } from "antd"
import { ArrowDownOutlined, DownOutlined, SettingOutlined, } from "@ant-design/icons";
import TokenList from "../tokenList.json"

function Swap() {
  const [slippage, setSlippage] = useState(0.5);
  const [tokenOneAmount, setTokenOneAmount] = useState("");
  const [tokenTwoAmount, setTokenTwoAmount] = useState("");
  const [tokenOne, setTokenOne] = useState(TokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(TokenList[1]);
  const [isOpen, setIsOpen] = useState(false); 

  function changeAmonut(e) {
    setTokenOneAmount(e.target.value)
  }

  function handleSlippage(e) {
    setSlippage(e.target.value)
  }

  function switchToken() {
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  }
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
          <Input placeholder='0' value={tokenOneAmount} onChange={changeAmonut} />
          <Input placeholder='0' value={tokenTwoAmount} disabled={true} />
          <div className='switchButton' onClick={switchToken}>
            <ArrowDownOutlined className='switchArrow' />
          </div>
          <div className='assetOne'>
            <img src={tokenOne.img} alt='TokenOneLogo' className='assetLogo' />
            {tokenOne.ticker}
            <DownOutlined />
          </div>
          <div className='assetTwo'>
            <img src={tokenTwo.img} alt='TokenOneLogo' className='assetLogo' />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>
      </div>
    </>
  )
}

export default Swap