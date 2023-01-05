import React from 'react'
import MyPurchases from './MyPurchases'
import './MyPurchases.css';

const MyPurchasesProps = () => {
    const [purchasesCard, setPurchasesCard]=useState([]);
  return (
    <div className="mypurchases">
        <MyPurchases />

    </div>
  )
}

export default MyPurchasesProps