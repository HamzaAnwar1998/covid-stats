/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getCovidDataAction from '../redux/actions';
import './css/CountryDetails.css';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covidReducer);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidDataAction());
    }
  }, []);
  const { name } = useParams();
  const country = data.filter((individualData) => individualData.Country === name);
  return country.map((individualCountry) => (
    <div className="country-card" key={individualCountry.ID}>
      <div className="flag-img">
        <img src={individualCountry.Flag} alt="flag" />
      </div>
      <div className="custom-row">
        <h5>Country</h5>
        <h5>{individualCountry.Country}</h5>
      </div>
      <div className="custom-row">
        <h5>Continent</h5>
        <h5>{individualCountry.Continent}</h5>
      </div>
      <div className="custom-row">
        <h5>Active Cases</h5>
        <h5>{individualCountry.ActiveCases}</h5>
      </div>
      <div className="custom-row">
        <h5>Total Cases</h5>
        <h5>{individualCountry.TotalCases}</h5>
      </div>
      <div className="custom-row">
        <h5>Critical Cases</h5>
        <h5>{individualCountry.CriticalCases}</h5>
      </div>
      <div className="custom-row">
        <h5>Deaths</h5>
        <h5>{individualCountry.Deaths}</h5>
      </div>
      <div className="custom-row">
        <h5>Population</h5>
        <h5>{individualCountry.Population}</h5>
      </div>
      <div className="custom-row">
        <h5>Recovered</h5>
        <h5>{individualCountry.Recovered}</h5>
      </div>
      <div className="custom-row">
        <h5>Tests</h5>
        <h5>{individualCountry.Tests}</h5>
      </div>
      <div className="custom-row">
        <h5>Today Cases</h5>
        <h5>{individualCountry.TodayCases}</h5>
      </div>
      <div className="custom-row">
        <h5>Today Deaths</h5>
        <h5>{individualCountry.TodayDeaths}</h5>
      </div>
      <div className="custom-row">
        <h5>Today Recovered</h5>
        <h5>{individualCountry.TodayRecovered}</h5>
      </div>
    </div>
  ));
};

export default CountryDetails;
