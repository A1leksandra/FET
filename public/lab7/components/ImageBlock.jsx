import React, { useState } from "react";

export default function ImageBlock() {
    const src =
        "https://uamedtours.com.ua/storage/images/0b72f48967d33b504c7b742bba050f4d-778w.jpg";

    const [visible, setVisible] = useState(true);
    const [width, setWidth] = useState(500);

    return (
        <>
            {visible && (
                <div className="image-wrapper">
                    <img src={src} width={width} />
                </div>
            )}

            <div className="buttons">
                <button onClick={() => setVisible(true)}>Додати</button>
                <button onClick={() => setWidth(width + 50)}>Збільшити</button>
                <button onClick={() => width > 100 && setWidth(width - 50)}>
                    Зменшити
                </button>
                <button onClick={() => setVisible(false)}>Видалити</button>
            </div>
        </>
    );
}
