import React from 'react'
import Main from '../components/Main'
import { Row } from '../components/Row'
import FetchData from "../components/Api/Gamedata";
import Platform from '../components/Api/Platform';
export const Home = () => {
  return (
    <>
        <Main/>
        <Row rowId="1" getData={FetchData} title="All Games"/>
        <Row rowId="2" getData={Platform} title="PC Games"/>
      
    </>
  )
  }
