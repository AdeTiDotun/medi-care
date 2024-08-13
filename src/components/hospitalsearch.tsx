// components/SearchHospital.tsx

import React, { useState, useEffect, FormEvent } from 'react';
import { Hospital } from '../types/hospital';
 

const SearchHospital: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/hospitals.json'); // Adjust path if necessary
      const data: Hospital[] = await response.json(); // Type the response
      setHospitals(data);
    };
    fetchData();
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const results = hospitals.filter((hospital) =>
      hospital.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredHospitals(results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {filteredHospitals.map((hospital, index) => (
          <li key={index}>
            {hospital.name} - {hospital.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHospital;
