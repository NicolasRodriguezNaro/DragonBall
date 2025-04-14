import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import './DetailsPage.css'

import CustomCard from '../../Components/CustomCard/CustomCard';

const DetailsPage = () => {

    const [data, setData] = useState({});

    let {id} = useParams()

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters/`+id)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error('Error fetching data:', error)); 
        console.log(data) 
    }, [id])

  return (
    <>
        <div id='card'>
          <CustomCard key={data.id} user={data}/>
        </div>
    </>
  )
}

export default DetailsPage