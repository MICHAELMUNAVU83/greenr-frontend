import React,{useState,useEffect} from 'react'
import MyPurchases from './MyPurchases'
import './MyPurchases.css';

const MyPurchasesProps = ({ loggedInUserId }) => {
    const [purchasesCard, setPurchasesCard]=useState([]);

    useEffect(() => {
        fetch(`/api/v1/my_purchases/${loggedInUserId}`)
        .then((resp)=> resp.json())
        .then((data)=>{
          setPurchasesCard(data);
        });
      }, []);

  return (
    <div className="mypurchases">
        <MyPurchases />

    </div>
  )
}

export default MyPurchasesProps