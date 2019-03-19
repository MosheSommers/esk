import React from 'react';
import Button from './Button'

export default class Settings extends React.Component{
    render(){
        return  (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td title="How many minutes before plag?">Mincha:</td>
                            <td><input name="minchaTime" type="text"/></td>
                            <td>
                                <Button 
                                src="https://img.icons8.com/nolan/2x/save.png"
                                width="24px"
                                onClick={this.props.onClick}
                                />
                                </td>
                        </tr>
                        <tr>
                            <td title="How many minutes after plag?">Latest candle:</td>
                            <td><input name="lightingTime" type="text"/></td>
                            <td>
                                <Button 
                                src="https://img.icons8.com/nolan/2x/save.png"
                                width="24px"
                                onClick={this.props.onClick}
                                />
                                </td>
                        </tr>
                    </tbody>
                </table>       
            </form>
        );         
    }
}