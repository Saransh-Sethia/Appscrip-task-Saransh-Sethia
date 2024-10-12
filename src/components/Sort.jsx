import React from 'react'

const Sort = ({sortBy, setSortBy}) => {

    const handleSortByChange = (e) => {
        
        setSortBy(e.target.value)
      };

    const options = ['PRICE : Low to High','PRICE : High to Low', 'NONE'];
  return (
    <form>
      <select
      label="Recommended"
      value={sortBy}
      onChange={handleSortByChange}
      className='custom-select'
      >
{
    options.map((item,id)=>(
        <option key={id} value={item}>
            {item}
        </option>
    ))
}
      </select>
      </form>
    
  )
}

export default Sort
