import React from 'react';

function Image() {
    const imageSrc = 'https://uamedtours.com.ua/storage/images/0b72f48967d33b504c7b742bba050f4d-778w.jpg';
    
    return (
        <div className="image-wrapper">
            <a 
                href="https://uamedtours.com.ua/about-ukraine/city/odesa"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src={imageSrc}
                    alt="Одеса"
                    width="500"
                />
            </a>
        </div>
    );
}

export default Image;

