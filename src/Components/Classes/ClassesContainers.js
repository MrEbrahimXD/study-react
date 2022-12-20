
import React from 'react';
import './Classes.css';

const ClassContainer = ({img,alt,title,link}) => {
    return (
        <div className='class-container'>
            <img src={img} alt={alt} />
            <h3 className='class-title'>{title}</h3>
            <a href={link} className='class-link'>انطلق</a>
        </div>
    );
}




const ClassesContainers = () => {
    return (
        <>
            <div className='classes-container'>
            <ClassContainer img="" alt="" title="" link="" />
            <ClassContainer img="" alt="" title="" link="" />
            <ClassContainer img="" alt="" title="" link="" />
            </div>
        </>
    );
}

export default ClassesContainers;
