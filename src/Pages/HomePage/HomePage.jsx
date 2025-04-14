import {useState, useEffect} from 'react'
import './HomePage.css'

import {Link} from 'react-router-dom'

import CustomCard from '../../Components/CustomCard/CustomCard';
import Pagination from '@mui/material/Pagination';

const HomePage = () => {

    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages]= useState(1);

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters`)
        .then(response => response.json())
        .then(data => {
            setCharacters(data.items)
            setTotalPages(data.meta.totalPages)
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [])

    const handlePagination=(event, page)=>{
        fetch(`https://dragonball-api.com/api/characters/?page=${page}`)
        .then(response => response.json())
        .then(data => setCharacters(data.items));    
    }

  return (
    <>
        <main>
            {
                characters.map((item) => (
                    <Link to={`/details/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                        <CustomCard key={item.id} user={item} />
                    </Link>
                ))
            }
        </main>
        <div id='pagination'>
            <Pagination onChange={handlePagination} count={totalPages} variant="outlined" shape="rounded" />
        </div>
    </>
  )
}

export default HomePage