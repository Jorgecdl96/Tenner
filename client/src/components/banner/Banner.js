import React, { useEffect, useState } from 'react';
import Search from './Search';

export default function Banner() {
    return (
        <div id='banner' className='container-fluid p-0'>
            <div id='wrap' className='row d-flex d-wrap align-items-center p-3'>
                <header id='header' className='p-2'>
                    <h1 className='col-12 text-center display-1 fw-bold p-2'>Tenner</h1>
                    <p className='col-12 text-center p-2 display-4'>Find your Next programmer.</p>
                    {/* Search Input global container*/}
                    <div className='row justify-content-center mt-5'>
                        <div className='search-input-container d-flex border border-muted rounded col-auto p-0 align-items-center ps-2'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                            </svg>
                            <Search />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}