import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus();
  },[]);
  const searchCocktail =()=>{
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) =>{
    e.preventDeafault();
  }

    return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor="name">search your favorite</label>
          <input onChange={searchCocktail} type='text' id="name" ref={searchValue} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
