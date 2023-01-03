import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import './EachCarbonCredit.css';


const EachCarbonCredit = () => {

    const [carbon, setCarbon ] = useState([]);
    const {id} = useParams();
    // const navigate = useNavigate();

    useEffect(() => {
     fetch(`/api/v1/carbon_credits/${id}`)
     .then(res => res.json())
     .then (data => (setCarbon(data)))
    },[])
    

  return (
    <div className='carboncreditcard '>
        <img className='img' src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="image"/>
        <div className='carbondetails'>
            <button type="button" className="btn btn-outline-success text-center">{carbon.price}</button>
            <p className='carbonparagraph'>As trees grow, they take in carbon from the air and store it in wood, plant matter, and in the soil,
               making them what scientists call “carbon sinks.”
               In this way, forests play an important role in the global carbon
               cycle by soaking up lots of carbon dioxide that would otherwise live in the atmosphere.
            </p>
            <button type="button" class="btn btn-success">Buy Now</button>
        </div>
        
    </div>
  )
}

export default EachCarbonCredit