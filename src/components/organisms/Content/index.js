import {useState, useEffect} from 'react';
import {Banner,Card,Card2,Card3,Card4,Movie} from '../../molecules'

const Content = () => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('');


    const getData = async () => {
      const response = await fetch("https://www.omdbapi.com/?apikey=94661849&s="+search);
      const data = await response.json();
      setItems(data.Search);
    }

    const getSearch = async (e) => {
      e.preventDefault()
      getData();
    }
    
        return(
            <div id="layoutSidenav_content">
                    <main>
                        <div class="container px-5 mt-5">
                        <div className='row mb-5'>
                            <div className='col-12'>
                            <Banner/>
                            <Card/>
                            <Card2/>
                            <Card3/>
                            <Card4/>
                             <form className='mt-5' onSubmit={getSearch}>
                              <div className='col-md-6'>
                              <div className='form-group d-flex'>
                              <input placeholder='Search Movie' className='form-control mr-1' onChange={(e) => setSearch(e.target.value)} />
                              <button className='btn btn-outline-primary' type='submit'>Search</button>
                            </div>
                              </div>
                             </form>
                            <Movie items={items}/>
                            </div>
                        </div>
                        </div>
                    </main>
                </div>
        )
}

export default Content;