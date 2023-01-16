import React, { useState } from 'react'
import "./_Products.scss"
import "../../components/Lists/List"
import List from '../../components/Lists/List'
import { useParams } from 'react-router-dom'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] =useState(null)

  return (
    <div className='products'>
      <div className="left">
      <div className="filterItem">
        <h2>Product Categories</h2>
        <div className="inputItem">
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1">Tops</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="2" value={1} />
          <label htmlFor="2">Bottoms</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="3" value={1} />
          <label htmlFor="3">Shoes</label>
        </div>
      </div>
      <div className="filterItem">
        <h2>Filter By Price</h2>
        <span>0</span>
        {/* NOTE: When we onChange this input we change maximum price */}
        {/* NOTE: "onChange" -> setMaxPrice (e.target.value); = "<span>{maxPrice}</span>" */}
        <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
        <span>{maxPrice}</span>
      </div>
      <div className="filterItem">
        <h2>Sort by</h2>
        <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")} /> 
        <label htmlFor="asc">Price (Lowest First)</label>
        <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("asc")} />
        <label htmlFor="desc">Price (Hightest First)</label>
      </div>
      </div>
      <div className="right">
        <img className='catImg'
        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
        {/* <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/> */}
      </div>
    </div>
  )
}

export default Products