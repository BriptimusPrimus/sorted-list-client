import React from 'react';

export default class TableBody extends React.Component {
  render() {
    return(
      <tbody>
        <tr>
          <td className="text-center">Fido</td>
          <td className="text-center">0 Years, 3 Months</td>
          <td className="text-center">Lost</td>
          <td className="text-center">Last seen on 31/01/2015 At Parque Guanal</td>
          <td className="text-center">camou</td>            
        </tr>
        <tr>
          <td className="text-center">Connie</td>
          <td className="text-center">2 Years, 5 Months</td>
          <td className="text-center">Lost</td>
          <td className="text-center">Last seen on 16/01/2015</td>
          <td className="text-center">ppenchis</td>
        </tr>          
      </tbody>      
    );
  }
}