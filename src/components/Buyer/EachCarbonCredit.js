import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router";


const EachCarbonCredit = () => {

    const [carbon, setCarbon ] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
     fetch(`/api/v1/carbon_credits/${id}`)
     .then(res => res.json())
     .then (data => (setCarbon(data)))
    },[])
    

  return (
    <div className='carboncreditcard'>
        

    </div>
  )
}

export default EachCarbonCredit