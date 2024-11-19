import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const HomePage = () => {
  const [featuredShoes, setFeaturedShoes] = useState([]);
  const [latestArrivals, setLatestArrivals] = useState([]);

  useEffect(() => {
    // Simulated data fetch - replace with actual API call
    const fetchFeaturedShoes = async () => {
      const mockFeaturedShoes = [
        {
          id: 1,
          name: 'Nike Air Jordan 1',
          brand: 'Nike',
          price: 299.99,
          image: '/path/to/jordan1.jpg'
        },
        {
          id: 2,
          name: 'Adidas Yeezy Boost 350',
          brand: 'Adidas',
          price: 249.99,
          image: '/path/to/yeezy.jpg'
        }
      ];
      setFeaturedShoes(mockFeaturedShoes);
    };

    const fetchLatestArrivals = async () => {
      const mockLatestArrivals = [
        {
          id: 3,
          name: 'New Balance 550',
          brand: 'New Balance',
          price: 129.99,
          image: '/path/to/newbalance.jpg'
        },
        {
          id: 4,
          name: 'Puma RS-X',
          brand: 'Puma',
          price: 149.99,
          image: '/path/to/puma.jpg'
        }
      ];
      setLatestArrivals(mockLatestArrivals);
    };

    fetchFeaturedShoes();
    fetchLatestArrivals();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Exclusive Sneakers</h1>
          <p className="text-xl mb-6">Buy, Sell, and Trade Limited Edition Shoes</p>
          <Link 
            to="/shoes" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Shop Now
          </Link>
        </section>

        {/* Featured Shoes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Shoes</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featuredShoes.map(shoe => (
              <div 
                key={shoe.id} 
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img 
                  src={shoe.image} 
                  alt={shoe.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{shoe.name}</h3>
                  <p className="text-gray-500">{shoe.brand}</p>
                  <p className="font-bold text-blue-600">${shoe.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Arrivals */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Latest Arrivals</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {latestArrivals.map(shoe => (
              <div 
                key={shoe.id} 
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img 
                  src={shoe.image} 
                  alt={shoe.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{shoe.name}</h3>
                  <p className="text-gray-500">{shoe.brand}</p>
                  <p className="font-bold text-blue-600">${shoe.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <Navigation />
    </div>
  );
};

export default HomePage;