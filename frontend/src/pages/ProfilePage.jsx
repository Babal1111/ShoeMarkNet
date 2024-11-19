import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([]);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    // Simulated user and data fetch
    const fetchUserData = async () => {
      setUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
        totalSales: 1245.50,
        totalPurchases: 875.25
      });

      setListings([
        {
          id: 1,
          name: 'Nike Air Jordan 1',
          price: 299.99,
          status: 'Active',
          dateListed: '2024-03-15'
        },
        {
          id: 2,
          name: 'Adidas Yeezy Boost',
          price: 249.99,
          status: 'Sold',
          dateListed: '2024-02-10'
        }
      ]);

      setPurchases([
        {
          id: 1,
          name: 'New Balance 550',
          price: 129.99,
          datePurchased: '2024-03-20'
        },
        {
          id: 2,
          name: 'Puma RS-X',
          price: 149.99,
          datePurchased: '2024-02-25'
        }
      ]);
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {user && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* User Profile Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
              <div className="space-y-3">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Total Sales</p>
                    <p className="text-green-600">${user.totalSales.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Total Purchases</p>
                    <p className="text-blue-600">${user.totalPurchases.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Active Listings Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">My Listings</h2>
              <div className="space-y-3">
                {listings.map(listing => (
                  <div 
                    key={listing.id} 
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{listing.name}</p>
                      <p className="text-sm text-gray-500">{listing.dateListed}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${listing.price.toFixed(2)}</p>
                      <span 
                        className={`text-sm px-2 py-1 rounded ${
                          listing.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {listing.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Purchase History */}
            <section className="bg-white shadow-md rounded-lg p-6 col-span-full">
              <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
              <div className="space-y-3">
                {purchases.map(purchase => (
                  <div 
                    key={purchase.id} 
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{purchase.name}</p>
                      <p className="text-sm text-gray-500">{purchase.datePurchased}</p>
                    </div>
                    <p className="font-bold">${purchase.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />
      <Navigation />
    </div>
  );
};

export default ProfilePage;