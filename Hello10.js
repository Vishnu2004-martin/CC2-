import React from 'react';
import './HelloStyles.css';
export default function Hello(){
    return(
        <div>
        <h1>SUBMISSION FORM</h1>
         <table>
            <tbody>
              <tr>
                 <td className="t1">Name:</td>
                 <td className="t2"><input type="text"></input></td>
              </tr>
              <tr>
                 <td className="t1">Mobile No:</td>
                 <td className="t2"><input type="number"></input></td>
              </tr>
              <tr>
                 <td className="t1">Email:</td>
                 <td className="t2"><input type="email"></input></td>
              </tr>
              <tr>
                 <td className="t1">Age:</td>
                 <td className="t2"><input type="number"></input></td>
              </tr>
              <tr>
                 <td className="t1">Date Of Birth:</td>
                 <td className="t2" id="tb"><input type="date"></input></td>
              </tr>
              <tr>
                 <td className="t1">Gender:</td>
                 <td className="t2"><input type="radio"></input>Male <input type="radio"></input>Female</td>
              </tr>
              <tr>
                 <td className="t1">Branch:</td>
                 <td className="t2">
                 <select>
                 <option>Dindigul</option>
                 <option>Chennai</option>
                 <option>Coimbatore</option>
                 <option>Trivandrum</option>
                 </select></td>
              </tr>
              <tr>
                 <td className="t1">Department:</td>
                 <td className="t2">
                 <select>
                 <option>Development</option>
                 <option>Finance</option>
                 <option>Innovation</option>
                 <option>Sales</option>
                 <option>Adviser</option>
                 </select></td>
              </tr>
              <tr>
                 <td className="t1">Position:</td>
                 <td><input type="checkbox"></input> Manager <input type="checkbox"></input> Technical assist <input type="checkbox"></input> superviser <input type="checkbox"></input> Staff</td>
              </tr>
              <tr>
                 <td className="t1">Comments:</td>
                 <td className="t2"><textarea id="ta"></textarea></td>
              </tr>
              
              <tr>
                 <td ><button class="b">Declear</button></td>
                 <td ><button class="b">Reset</button></td>
              </tr>
            </tbody>
         </table>
        </div>
    )
}