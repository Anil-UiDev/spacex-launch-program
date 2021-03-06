import { useState, useEffect } from 'react';
import {Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Filter from './components/filters/Filter';
import DataList from './components/content/DataList';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  
  // Code to fetch Data from API

  const baseApiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100'

  const fetchData = async (apiUrl) => {
    const result = await axios.get(apiUrl)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
    return result;
  }

  // replace default data with fetched data

  useEffect(()=>{
    handleSuccessFilter()
    let filterArray = ['launch_year', 'land_success', 'launch_success'];
    for ( let i=0; i<filterArray.length; i++){
      if(localStorage.getItem(filterArray[i])){
        let value = localStorage.getItem(filterArray[i])
        let id = value.split('|')[1]
        document.getElementById(id).checked = true;
      }
    }
    //eslint-disable-next-line
  }, [])


  
  const getParams = () => {
    let params = ''
    let filterArray = ['launch_year', 'land_success', 'launch_success'];
    for ( let i=0; i<filterArray.length; i++){
      if(localStorage.getItem(filterArray[i])){
        let value = localStorage.getItem(filterArray[i])
        value = value.split('|')[0]
        params += `&${filterArray[i]}=${value}` 
      }
    }
    return params;
  }


  const handleSuccessFilter = (value = '', name = '', id='') =>{
    if(name){
      localStorage.setItem(name, value + '|' + id)
    }

    let apiUrl = `${baseApiUrl}${getParams()}`
    
    fetchData(apiUrl).then(data => setData(data))
  }

  const handleResetFilter = () => {
    let apiUrl = `${baseApiUrl}`
    fetchData(apiUrl).then(data => setData(data))
  }

  return (
    <div className="spacex-app d-block w-100 p-2">
      <div className="container">
        <h1>SpaceX Launch Programs</h1>
        <div className="row">
          <Filter successFilter={handleSuccessFilter} resetFilter = {handleResetFilter}/>
          <Switch>
            <Route path="/">
              <DataList data = {data} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
