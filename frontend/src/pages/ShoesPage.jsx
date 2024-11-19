import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Navigation from '../components/common/Navigation';

const ShoesPage = () => {
  const [shoes, setShoes] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    size: ''
  });
  const [sortBy, setSortBy] = useState('');

  const brands = ['Nike', 'Adidas', 'Jordan', 'New Balance', 'Puma'];
  const sizes = [7, 8, 9, 10, 11, 12];
  const priceRanges = [
    { label: 'Under $100', min: 0, max: 100 },
    { label: '$100 - $250', min: 100, max: 250 },
    { label: '$250 - $500', min: 250, max: 500 },
    { label: 'Over $500', min: 500, max: 10000 }
  ];

  useEffect(() => {
    const fetchShoes = async () => {
      const mockShoes = [
        {
          id: 1,
          name: 'Nike Air Jordan 1',
          brand: 'Nike',
          price: 299.99,
          size: 10,
          image: '/path/to/jordan1.jpg'
        },
        {
          id: 2,
          name: 'Adidas Yeezy Boost 350',
          brand: 'Adidas',
          price: 249.99,
          size: 9,
          image: '/path/to/yeezy.jpg'
        },
        {
          id: 3,
          name: 'New Balance 550',
          brand: 'New Balance',
          price: 129.99,
          size: 11,
          image: '/path/to/newbalance.jpg'
        }
      ];

      // Apply filters
      const filteredShoes = mockShoes.filter(shoe => {
        const brandMatch = !filters.brand || shoe.brand === filters.brand;
        const sizeMatch = !filters.size || shoe.size === parseInt(filters.size);
        const priceMatch = !filters.priceRange || 
          (shoe.price >= priceRanges[filters.priceRange].min && 
           shoe.price <= priceRanges[filters.priceRange].max);
        
        return brandMatch && sizeMatch && priceMatch;
      });

      // Apply sorting
      const sortedShoes = [...filteredShoes].sort((a, b) => {
        switch(sortBy) {
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          default:
            return 0;
        }
      });

      setShoes(sortedShoes);
    };

    fetchShoes();
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="col-span-1 bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            
            {/* Brand Filter */}
            <div className="mb-4">
              <label className="block mb-2">Brand</label>
              <select 
                value={filters.brand}
                onChange={(e) => setFilters({...filters, brand: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Size Filter */}
            <div className="mb-4">
              <label className="block mb-2">Size</label>
              <select 
                value={filters.size}
                onChange={(e) => setFilters({...filters, size: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="">All Sizes</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block mb-2">Price Range</label>
              <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="">All Prices</option>
                {priceRanges.map((range, index) => (
                  <option key={index} value={index}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="mt-4">
              <label className="block mb-2">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Shoes Grid */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {shoes.map(shoe => (
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
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold text-blue-600">${shoe.price.toFixed(2)}</p>
                    <p className="text-gray-500">Size {shoe.size}</p>
                  </div>
                  <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <Navigation />
    </div>
  );
};

export default ShoesPage;