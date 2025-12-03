import React from "react";
import GoodsCard from "./GoodsCard.jsx";

export default function GoodsGallery() {
    const goods = [
        { id: 1, title: "Ноутбук", price: 25999, image: "https://picsum.photos/seed/a/300" },
        { id: 2, title: "Телефон", price: 18999, image: "https://picsum.photos/seed/b/300" },
        { id: 3, title: "Годинник", price: 3999, image: "httpsum.photos/seed/c/300" },
        { id: 4, title: "Навушники", price: 2999, image: "https://picsum.photos/seed/d/300" },
        { id: 5, title: "Планшет", price: 32999, image: "https://picsum.photos/seed/e/300" },
        { id: 6, title: "Колонка", price: 1599, image: "https://picsum.photos/seed/f/300" }
    ];

    return (
        <div className="goods-gallery">
            {goods.map((g) => (
                <GoodsCard key={g.id} {...g} />
            ))}
        </div>
    );
}
