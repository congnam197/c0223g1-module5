import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";

export async function getStaticProps() {
  const res = await axios.get("http://localhost:8080/covids")
  const data = res.data;
  return{
    props:{
      covidData : data
    }

  }
}
export default function Home({covidData}) {
  return (
    <div className='container'>
    <div className='title'>
      <h2>VietNam's COVID-19 Information</h2>
      
    </div>
      <div className='table table-striped'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Confirm</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Death</th>
            </tr>
          </thead>
          <tbody>
            {covidData.map((data)=>{
              return(
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.confirmed}</td>
                <td>{data.active}</td>
                <td>{data.recovered}</td>
                <td>{data.deaths}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
