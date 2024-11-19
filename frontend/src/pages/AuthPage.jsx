import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login logic
        console.log('Login attempt', { email, password });
        // Implement actual login logic here
        navigate('/profile');
      } else {
        // Registration logic
        console.log('Registration attempt', { username, email, password });
        // Implement actual registration logic here
        navigate('/profile');
      }
    } catch (error) {
      console.error('Authentication error', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="username" className="block mb-2">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
              minLength="6"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        
        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin 
              ? 'Need an account? Register' 
              : 'Already have an account? Login'}
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <hr className="w-1/4 border-gray-300" />
            <span className="text-gray-500">OR</span>
            <hr className="w-1/4 border-gray-300" />
          </div>
          
          <div className="mt-4 space-y-2">
            <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
              Continue with Google
            </button>
            <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;