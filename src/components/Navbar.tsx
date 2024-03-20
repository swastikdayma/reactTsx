import React from 'react';
import {Link} from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-gradient-to-r from-slate-900 to-slate-600 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold text-lg">
              Products Wali Website
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <Link to="/" className="text-gray-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
             
                <Link to="#" className="text-gray-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link to="#" className="text-gray-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                  Cart
                </Link>
                <Link to="/signup" className="text-gray-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                  Signup
                </Link>
                <Link to="/login" className="text-gray-300 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
