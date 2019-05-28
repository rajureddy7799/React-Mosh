import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    let {itemsCount, pageSize, currentPage, onPageChange} = props;
    let pagesCount = itemsCount / pageSize;
    
    const pages = _.range(1,pagesCount + 1);
    
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
           {
               pages.map((page) => (
                    <li 
                    className= {currentPage === page ? 'page-item active' : 'page-item'} key={page}>
                        <a  className="page-link"
                        onClick={() => onPageChange(page)}
                        >{page}</a>
                    </li>
               ))
           }
           
            </ul>
        </nav>
    );
}

export default Pagination;