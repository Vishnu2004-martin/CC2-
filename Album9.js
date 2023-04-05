import React from 'react'

export default function Albums() {
  return (
    <div style={{color:"Red"}}>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Singer</th>
            <th scope="col">Songs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Night Dark</td>
            <td>Three Studio's</td>
          </tr>
          <tr>
            <td scope='row'>Madi</td>
            <td>Fearless</td>
          </tr>
          <tr>
            <td scope='row'>Ilayaraja</td>
            <td>Midnight Memories</td>
          </tr>
          <tr>
          <td scope='row'>Vijay</td>
          <td>Hits</td>
        </tr>
        <tr>
        <td scope='row'>AR</td>
        <td>momeries</td>
      </tr>

        </tbody>
      </table>
    </div>
  )
}