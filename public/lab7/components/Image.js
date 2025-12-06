import React, { useState } from 'react';

function Image() {
    const [toggled, setToggled] = useState(false);
    const [imageVisible, setImageVisible] = useState(true);
    const [imageWidth, setImageWidth] = useState(500);
    const imageSrc = 'https://uamedtours.com.ua/storage/images/0b72f48967d33b504c7b742bba050f4d-778w.jpg';

    const toggleColors = () => {
        setToggled(prevToggled => !prevToggled);
    }

    const handleAdd = () => {
        if (!imageVisible) {
            setImageVisible(true);
            setImageWidth(500);
        }
    }

    const handleIncrease = () => {
        setImageWidth(prevWidth => prevWidth + 50);
    }

    const handleDecrease = () => {
        setImageWidth(prevWidth => {
            if (prevWidth > 100) {
                return prevWidth - 50;
            }
            return prevWidth;
        });
    }

    const handleDelete = () => {
        setImageVisible(false);
    }

    const divStyle = toggled ? {
        backgroundColor: '#1f73d0',
        color: '#ffffff'
    } : {};

    return (
        <div>
            <div 
                id="elem9" 
                className="clickable image-wrapper"
                onClick={toggleColors}
                style={divStyle}
            >
                {imageVisible && (
                    <a 
                        id="cityLink"
                        href="https://uamedtours.com.ua/about-ukraine/city/odesa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            id="cityImage"
                            src={imageSrc}
                            alt="Одеса"
                            width={imageWidth}
                        />
                    </a>
                )}
            </div>

            <div className="buttons">
                <button id="btnAdd" onClick={handleAdd}>Додати зображення</button>
                <button id="btnIncrease" onClick={handleIncrease}>Збільшити зображення</button>
                <button id="btnDecrease" onClick={handleDecrease}>Зменшити зображення</button>
                <button id="btnDelete" onClick={handleDelete}>Видалити зображення</button>
            </div>
        </div>
    );
}

export default Image;

