import React from 'react'

const Pagination = ({totalPages, handleClick}) => {
  const pages = [...Array(totalPages).keys()].map(num => num +1);
  return (
    <div className="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
        <ul className="pagination">
        {pages.map(num => {return (
            <li className="page-item" key={num}><button className="page-link" key={num} onClick={() => handleClick(num)} >{num}</button></li>
        )})}
        </ul>
        </nav>    
    </div>
  )
}

export default Pagination