// components/SearchHospital.tsx

"use client";

import React, { useState } from 'react';
import hospitalData from "@/data/data.json";

interface HospitalData {
  name: string;
  address: string;
  contact: string;
}

const SearchHospital: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState<HospitalData[]>([]);
  const [page, setPage] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const itemsPerPage = 12;

  const searchHospitals = () => {
    if (query.trim()) {
      const results = hospitalData
        .filter(hospital =>
          hospital.address?.toLowerCase().includes(query.toLowerCase())
        )
        .map(hospital => ({
          name: hospital["Hospital name"],
          address: hospital.address,
          contact: hospital.contact
        }));
      setFilteredHospitals(results);
      setPage(0); // Reset to first page on new search
      setShowResults(true); // Show results after search button is clicked
    }
  };

  const paginatedHospitals = filteredHospitals.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <div className="p-6 bg-green-50 flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchHospitals();
        }}
        className="mb-6 w-full max-w-lg"
      >
        <input
          type="text"
          placeholder="Enter your location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-4 p-3 w-full text-lg border border-green-300 rounded"
        />
        <button
          type="submit"
          className="block w-full py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600"
        >
          Search
        </button>
      </form>

      {showResults && filteredHospitals.length > 0 && (
        <>
          <div className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {paginatedHospitals.map((hospital, index) => (
              <div
                key={index}
                className="border border-green-500 p-4 rounded-lg bg-white"
                style={{ paddingBottom: '20px' }} // Adjust padding-bottom as needed
              >
                <h2 className="text-lg font-bold">{hospital.name}</h2>
                <p className="text-gray-600">{hospital.address}</p>
                <p className="text-gray-600">{hospital.contact}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between w-full max-w-lg">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 0}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={(page + 1) * itemsPerPage >= filteredHospitals.length}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchHospital;
