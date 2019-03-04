import React from 'react';

export default class Row extends React.Component{
    render(){
        return  <tr>
                    <td className="capitalize">{this.props.label} :</td>
                    <td>{this.props.time}</td>
                </tr>;         
    }
}