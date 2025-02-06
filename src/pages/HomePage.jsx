import React, { useEffect, useState } from "react";
import cash from "../assets/images/cash.png";
import wallet from "../assets/images/wallet.png";
function HomePage() {
  const [sendAmount, setSetAmount] = useState(0);
  const [charge,setCharge] = useState(0)

  useEffect(()=>{
    if(sendAmount <=1499){
      setCharge(15);
    }else if(sendAmount <=1999){
      setCharge(25);
    }else if(sendAmount <= 2499){
      setCharge(35)
    }
    else if(sendAmount <= 2999){
      setCharge(45)
    }else if(sendAmount <= 3499){
      setCharge(55)
    }
    else if(sendAmount <= 3999){
      setCharge(65)
    }else if(sendAmount <= 4499){
      setCharge(75)
    }else if(sendAmount <= 4999){
      setCharge(85)
    }else if(sendAmount <= 7499){
      setCharge(100)
    }else if(sendAmount <= 9999){
      setCharge(150)
    }else if(sendAmount <= 19999){
      setCharge(sendAmount * (5/100));
    }
    else if(sendAmount <= 24999){
      setCharge(sendAmount * (6/100));
    }else if(sendAmount <= 29999){
      setCharge(sendAmount * (7/100));
    }else if(sendAmount <= 49999){
      setCharge(sendAmount * (9/100));
    }else if(sendAmount >= 50000 && sendAmount < 100000){
      setCharge(sendAmount * (11/100));
    }else if(sendAmount >= 100000){
      setCharge(sendAmount * (20/100));
    }
  }, [sendAmount])
  return (
    <div className="pt-10 px-10">
      <h1 className="text-texts text-center">Send Money Online</h1>
      <p className="text-texts">Your Receiver's Country</p>
      <div className="bg-white rounded-md h-8 flex items-center">
        <select name="" id="" className="block w-full rounded-md">
          <option value="Sweden">Sweden</option>

        </select>
      </div>
      <div className="md:flex gap-8 mt-5">
        <div className="flex-1">
          <p className="text-texts">Send Amount (SEK)</p>
          <div className="bg-white rounded-md h-8 flex items-center">
            <input type='number' name="" id="" className="block w-full rounded-md"  onChange={e=>setSetAmount(e.target.value)}/>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-texts">Receiver's Amount (SEK)</p>
          <div className="bg-white rounded-md h-8 flex items-center">
            <input name="" id="" className="block w-full rounded-md" type='number' value={sendAmount}/>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-texts mb-5 font-bold text-xl">Choose How to Pay</h2>
            <div className="md:flex gap-4">
            <div className="bg-appblue md:w-[28%] mt-5 md:mt-0 rounded-md h-[200px] pt-5">
          <img
            src={cash}
            className="w-8 h-8 object-contain block mx-auto mt-3"
          />
          <h3 className="text-white text-center mt-6">Cash</h3>
          <h3 className="text-white text-center">Pay with Cash</h3>
          <h3 className="text-white text-center">Fee: 0.00</h3>
        </div>
        <div className="bg-white md:w-[28%] mt-5 md:mt-0 rounded-md h-[200px] pt-5">
          <img
            src={wallet}
            className="w-8 h-8 object-contain block mx-auto mt-3"
          />
          <h3 className="text-texts text-center mt-6">Mobile Wallet</h3>
          <h3 className="text-appblue text-center">Pay with Cash</h3>
          <h3 className="text-appblue text-center">Fee: 0.00</h3>
        </div>
            </div>
        
            <h2 className="text-texts mb-5 mt-10 text-center font-bold text-xl">Select Your Payment Method</h2>
            <div className="md:flex gap-4">
            <div className="bg-appblue md:w-[28%] mt-5 md:mt-0 rounded-md h-[200px] pt-5">
          <img
            src={cash}
            className="w-8 h-8 object-contain block mx-auto mt-3"
          />
          <h3 className="text-white text-center mt-6">Cash</h3>
          <h3 className="text-white text-center">Pay with Cash</h3>
          <h3 className="text-white text-center">Fee: 0.00</h3>
        </div>
        <div className="bg-white md:w-[28%] mt-5 md:mt-0 rounded-md h-[200px] pt-5">
          <img
            src={wallet}
            className="w-8 h-8 object-contain block mx-auto mt-3"
          />
          <h3 className="text-texts text-center mt-6">Mobile Wallet</h3>
          <h3 className="text-appblue text-center">Pay with Cash</h3>
          <h3 className="text-appblue text-center">Fee: 0.00</h3>
        </div>
        <div className="bg-white md:w-[28%] mt-5 md:mt-0 rounded-md h-[200px] pt-5">
          <img
            src={wallet}
            className="w-8 h-8 object-contain block mx-auto mt-3"
          />
          <h3 className="text-texts text-center mt-6">Mobile Wallet</h3>
          <h3 className="text-appblue text-center">Pay with Cash</h3>
          <h3 className="text-appblue text-center">Fee: 0.00</h3>
        </div>
            </div>

            <div className="bg-white py-5 my-5 px-4 rounded-md">
                <h2 className="text-texts text-center font-bold text-xl">Summary</h2>
                <p className="text-texts">Exchange Rate: 1.00SEK = 137.3588 Nigerian Naira (NGN)</p>
                <p className="text-texts">Transfer Amount:{sendAmount}.00SEK</p>
                <p className="text-texts">Transfer Fee: {charge}.00SEK</p>
                <p className="text-texts">Receiver Gets:{sendAmount}</p>
                <p className="text-texts">Delivery Time: In Minutes</p>

            </div>
      </div>
    </div>
  );
}

export default HomePage;
