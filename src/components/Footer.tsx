import React from 'react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla facilisi. Nunc efficitur massa quis magna sollicitudin.</p>
          </div>
       
          <div className="md:col-span-2">
            <div className="flex justify-around">
              <div>
                <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-sm hover:text-gray-400">Home</Link></li>
                  <li><Link to="#" className="text-sm hover:text-gray-400">About</Link></li>
                  <li><Link to="#" className="text-sm hover:text-gray-400">Services</Link></li>
                  <li><Link to="#" className="text-sm hover:text-gray-400">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Legal</h2>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-sm hover:text-gray-400">Privacy Policy</Link></li>
                  <li><Link to="#" className="text-sm hover:text-gray-400">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-300 hover:text-white"> <i className="bi bi-twitter"></i></Link>
            <Link to="#" className="text-gray-300 hover:text-white"><i className="bi bi-whatsapp"></i></Link>
            <Link to="#" className="text-gray-300 hover:text-white"><i className="bi bi-instagram"></i></Link>
            <Link to="#" className="text-gray-300 hover:text-white"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
