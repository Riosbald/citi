import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, MapPinIcon, ClockIcon, PhoneIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
export function FindLocationsPage() {
  const navigate = useNavigate();
  const locations = [{
    name: 'Citibank Branch - Downtown',
    address: '123 Main Street, New York, NY 10001',
    phone: '(212) 555-0100',
    hours: 'Mon-Fri: 9AM-5PM, Sat: 9AM-2PM',
    distance: '0.5 miles'
  }, {
    name: 'Citibank ATM - Central Park',
    address: '456 Park Avenue, New York, NY 10022',
    phone: 'ATM Only',
    hours: '24/7',
    distance: '1.2 miles'
  }, {
    name: 'Citibank Branch - Midtown',
    address: '789 Broadway, New York, NY 10003',
    phone: '(212) 555-0200',
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-3PM',
    distance: '2.1 miles'
  }];
  return <div className="min-h-screen bg-gray-50 pb-32">
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        <button onClick={() => navigate('/services')} className="flex items-center gap-1 text-gray-700 text-sm font-medium hover:text-gray-900 active:text-gray-600 transition-colors mb-6">
          <ChevronLeftIcon className="w-4 h-4" />
          Back to Services
        </button>

        <h1 className="text-2xl font-light text-gray-800 mb-6">
          Find ATM/Branch
        </h1>

        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <input type="text" placeholder="Enter address or ZIP code" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003B6F] focus:border-transparent outline-none transition-all" />
        </div>

        <div className="space-y-4">
          {locations.map((location, index) => <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {location.distance} away
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#003B6F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-[#003B6F]" />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{location.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{location.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{location.hours}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-[#003B6F] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#002B50] active:bg-[#001A30] transition-colors">
                Get Directions
              </button>
            </div>)}
        </div>
      </main>

      <BottomNavigation activeTab="services" />
    </div>;
}