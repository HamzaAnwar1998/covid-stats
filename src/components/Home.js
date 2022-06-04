/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/Home.css';
import { Icon } from 'react-icons-kit';
import { arrowRightCircle } from 'react-icons-kit/feather/arrowRightCircle';
import { Link, useLocation } from 'react-router-dom';
import getCovidDataAction from '../redux/actions';

const Home = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';

  const data = useSelector((state) => state.covidReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidDataAction());
    }
  }, []);
  const filter = data.filter((individualData) => individualData.Country.includes(search.toLowerCase()));
  return filter.map((individualData) => (
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
      <Link className="details-link" to={{ pathname: `/country/${individualData.Country}` }}>
        <span>
          More details
          {' '}
          <Icon icon={arrowRightCircle} size={20} />
        </span>
      </Link>
    </div>
  ));
};

export default Home;
