/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/Home.css';
import { Icon } from 'react-icons-kit';
import { arrowRightCircle } from 'react-icons-kit/feather/arrowRightCircle';
import getCovidDataAction from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCovidDataAction());
  }, []);
  const data = useSelector((state) => state.covidReducer);
  return data.map((individualData) => (
    <div key={individualData.ID} className="card">
      <div className="flag-img">
        <img src={individualData.Flag} alt="flag" />
      </div>
      <h2 className="country">{individualData.Country}</h2>
      <p className="active">
        Active Cases:
        {' '}
        {individualData.ActiveCases}
      </p>
      <span style={{ fontSize: `${12}px`, cursor: 'pointer' }}>
        More details
        {' '}
        <Icon icon={arrowRightCircle} size={20} />
      </span>
    </div>
  ));
};

export default Home;
