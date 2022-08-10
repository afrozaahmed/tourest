import React from 'react'
import homeImage from '../assets/search.png'
import './Search.css'

export default function Search() {
    return (
        <div id='search' className='search-main'>
            <div>
                <img className='background' src={homeImage} alt=''></img>
            </div>
            <div className='content'>
                <div className='title'>
                    <h1>TRAVEL TO EXPLORE</h1>
                    <p>The journey of a thousand miles begins with a single step.</p>
                </div>
                <div className='search-div'>
                    <div className='container-search'>
                        <label htmlFor=''>From?</label>
                        <input 
                            type='text' 
                            placeholder='Enter city or airport'
                            ></input>
                    </div>
                    <div className='container-search'>
                        <label htmlFor=''>To?</label>
                        <input type='text' placeholder='Enter city or airport'></input>
                    </div>
                    <div className='container-search'>
                        <label htmlFor=''>Check-in</label>
                        <input type='date' placeholder='dd/mm/yyyy'></input>
                    </div>
                    <div className='container-search'>
                        <label htmlFor=''> Check-out</label>
                        <input type='date' placeholder='dd/mm/yyyy'></input>
                    </div>
                    <button className='search-btn'>Explore Now</button>
                </div>
            </div>
        </div>
    )
}