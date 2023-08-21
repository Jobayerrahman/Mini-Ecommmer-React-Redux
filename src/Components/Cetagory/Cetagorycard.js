import React from 'react';
function Cetagorycard({image,title,number}) {
    return (
        <div className='cetagoryCardWrapper'>
            <img className='cetagoryImage' src={image}/>
            <div className='cetagoryCardContent'>
                <h2>{title}</h2>
                <span>({number})</span>
            </div>
        </div>
    );
}

export default Cetagorycard;