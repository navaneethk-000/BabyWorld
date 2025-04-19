import React from 'react';

const SizeGuide: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-blue-50 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Size Guide</h2>
      <p className="text-gray-600 text-center mb-8">
        Find the perfect fit for your little one with our helpful size chart
      </p>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-100">
                <th className="px-4 py-3 text-left">Size</th>
                <th className="px-4 py-3 text-center">Age Range</th>
                <th className="px-4 py-3 text-center">Weight (lbs)</th>
                <th className="px-4 py-3 text-center">Height (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium">Newborn</td>
                <td className="px-4 py-3 text-center">0-1m</td>
                <td className="px-4 py-3 text-center">5-8</td>
                <td className="px-4 py-3 text-center">17-21</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 font-medium">0-3m</td>
                <td className="px-4 py-3 text-center">0-3m</td>
                <td className="px-4 py-3 text-center">8-12</td>
                <td className="px-4 py-3 text-center">21-24</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium">3-6m</td>
                <td className="px-4 py-3 text-center">3-6m</td>
                <td className="px-4 py-3 text-center">12-16</td>
                <td className="px-4 py-3 text-center">24-26</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 font-medium">6-12m</td>
                <td className="px-4 py-3 text-center">6-12m</td>
                <td className="px-4 py-3 text-center">16-20</td>
                <td className="px-4 py-3 text-center">26-29</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium">12-18m</td>
                <td className="px-4 py-3 text-center">12-18m</td>
                <td className="px-4 py-3 text-center">20-24</td>
                <td className="px-4 py-3 text-center">29-31</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 font-medium">18-24m</td>
                <td className="px-4 py-3 text-center">18-24m</td>
                <td className="px-4 py-3 text-center">24-28</td>
                <td className="px-4 py-3 text-center">31-33</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium">2T</td>
                <td className="px-4 py-3 text-center">2y</td>
                <td className="px-4 py-3 text-center">28-32</td>
                <td className="px-4 py-3 text-center">33-35</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">3T</td>
                <td className="px-4 py-3 text-center">3y</td>
                <td className="px-4 py-3 text-center">32-35</td>
                <td className="px-4 py-3 text-center">35-38</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-blue-50">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> All measurements are approximate. For the best fit, we recommend measuring your child before ordering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;