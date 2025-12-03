import React from "react";

export default function GoodsCard({ image, title, price }) {
    return (
        <div className="goods-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="goods-price">{price} грн</p>
        </div>
    );
}
