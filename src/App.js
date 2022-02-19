import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import List from './components/list';
import { initialState, reducer } from "./hooks/reducer";
import { useEffect, useReducer } from "react"
import AutoSizer from 'react-virtualized-auto-sizer';
import axios from "axios";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
    useEffect( () => {async function getData(){
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
                const fulldata = response.data;
                dispatch({type: 'getData', value: fulldata});
    } getData()}, [])
  return (
    <>
    <NavBar dispatch={dispatch} filter={state.mainPage.searchFor}/>
    <div className='listContainer ms-3 me-3 mt-3'>
      <AutoSizer>
        {List (state.mainPage.currentData)}
      </AutoSizer>
    </div>
    </>
  );
}

export default App;
