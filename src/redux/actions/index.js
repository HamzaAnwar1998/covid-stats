/* eslint-disable no-underscore-dangle */
import axios from 'axios';

export const GET_COVID_DATA = 'COVID_STATS/GET_COVID_DATA';

export const getCovidDataAction = () => async (dispatch) => {
  const fetch = await axios.get('https://disease.sh/v3/covid-19/countries');
  const response = await fetch.data;
  const asianCountries = [];
  response.forEach((res) => {
    if (res.continent === 'Asia') {
      asianCountries.push({
        ID: res.countryInfo._id,
        Flag: res.countryInfo.flag,
        ActiveCases: res.active,
        TotalCases: res.cases,
        Continent: res.continent,
        Country: res.country,
        CriticalCases: res.critical,
        Deaths: res.deaths,
        Population: res.population,
        Recovered: res.recovered,
        Tests: res.tests,
        TodayCases: res.todayCases,
        TodayDeaths: res.todayDeaths,
        TodayRecovered: res.todayRecovered,
      });
      dispatch({
        type: GET_COVID_DATA,
        payload: asianCountries,
      });
    }
  });
};

export default getCovidDataAction;
