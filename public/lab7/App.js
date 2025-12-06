import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './components/Lab7.css';

function App() {
  // Дані для галереї товарів
  const goods = [
    {
      id: 1,
      name: 'Ноутбук Dell XPS 15',
      price: 45999,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Смартфон iPhone 15 Pro',
      price: 42999,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Навушники Sony WH-1000XM5',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Планшет iPad Air',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Камера Canon EOS R6',
      price: 89999,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Годинник Apple Watch Series 9',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="page">
      <Header />
      <Content />
      <Image />
      
      <div className="goods-gallery">
        <h2>Галерея товарів</h2>
        <div className="goods-container">
          {goods.map((good) => (
            <GoodsCard
              key={good.id}
              name={good.name}
              price={good.price}
              image={good.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

