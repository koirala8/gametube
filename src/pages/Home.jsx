import React from 'react'
import Main from '../components/Main'
import { Row } from '../components/Row'
import FetchData from "../components/Api/Gamedata";
import Platform from '../components/Api/Platform';
export const Home = () => {
  return (
    <>
        <Main/>
        <Row title='All Games' getData={FetchData}/>
        <Row title='PC Games' getData={Platform}/>
       
    </>
  )
}
