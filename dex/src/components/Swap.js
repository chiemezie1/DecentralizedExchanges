import React, {useState, useEffect} from 'react'
import { Input, Popover, Radio, Modal, meassage } from "antd"
import { ArrowDownOutlined, DownOutlined, SettingOutlined, } from "@ant-design/icons";

function Swap() {
  const [slippage, setSlippage] = useState(0.5);
  const [tokenOneAmount,setTokenOneAmount] = useState("");
  const [tokenTwoAmount, setTokenTwoAmount] = useState("");

  function changeAmonut(e){
    setTokenOneAmount(e.target.value)
  }

  function handleSlippage(e){
    setSlippage(e.target.value)
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
        <Input placeholder='0' value={tokenTwoAmount} disabled= {true} />
        <div className='asssetOne'></div>
        <div className='asssetTwo'></div>
      </div>
    </div>
  )
}

export default Swap