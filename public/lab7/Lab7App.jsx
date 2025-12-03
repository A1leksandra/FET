import React from "react";

import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import ImageBlock from "./components/ImageBlock.jsx";
import GoodsGallery from "./components/GoodsGallery.jsx";

function Lab7App() {
    return (
        <div className="app">
            <Header />
            <Content />
            <ImageBlock />

            <h2 className="section-title">Галерея товарів</h2>
            <GoodsGallery />
        </div>
    );
}

export default Lab7App;
