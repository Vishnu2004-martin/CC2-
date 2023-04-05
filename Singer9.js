import React from 'react'


export default function Singer() {
  return (
    <div style={{color:'green'}}>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Harry potter</td>
            <td>2012</td>
          </tr>
          <tr>
            <td scope='row'>Ilayaraja</td>
            <td>1975</td>
          </tr>
          <tr>
            <td scope='row'>Aniruth</td>
            <td>2023</td>
          </tr>
          <tr>
          <td scope='row'>A.R Rahuman</td>
          <td>2023</td>
        </tr>
        <tr>
        <td scope='row'>Vijay Antane</td>
        <td>2023</td>
      </tr>

        </tbody>
      </table>
    </div>
  )
}