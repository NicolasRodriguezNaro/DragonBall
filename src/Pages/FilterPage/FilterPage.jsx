import {useEffect, useState} from 'react'
import { useParams, Link} from 'react-router-dom';

import CustomCard from '../../Components/CustomCard/CustomCard';

const FilterPage = () => {

    let {sexo} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters?gender=`+sexo)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error('Error fetching data:', error)); 
    },[sexo])

  return (
    <>
        <main>
            {
                data.map((item) => (
                    <Link to={`/details/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <CustomCard key={item.id} user={item} />            
                    </Link>
                ))
            }
        </main>
    </>
  )
}

export default FilterPage