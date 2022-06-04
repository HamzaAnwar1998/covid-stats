import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleCountryFilter = (e) => {
    setSearch(e.target.value);
    navigate(e.target.value ? `?search=${e.target.value}` : '');
  };
  return (
    <input
      className="form-control"
      type="text"
      required
      placeholder="search for a country"
      value={search}
      onChange={handleCountryFilter}
    />
  );
};

export default Form;
