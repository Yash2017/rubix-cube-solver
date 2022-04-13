import React from 'react';
import Color from './Color'


class ColorPicker extends React.Component {
    render() { 
      return <div className='colorPicker'>
        <table>
          <tbody>
            <tr>
              <Color color={this.props.selectedColor==='w'?'w':'uw'} setColor={this.props.setColor}/>
              <Color color={this.props.selectedColor==='y'?'y':'uy'} setColor={this.props.setColor}/>
              <Color color={this.props.selectedColor==='g'?'g':'ug'} setColor={this.props.setColor}/>
              <Color color={this.props.selectedColor==='b'?'b':'ub'} setColor={this.props.setColor}/>
              <Color color={this.props.selectedColor==='r'?'r':'ur'} setColor={this.props.setColor}/>
              <Color color={this.props.selectedColor==='o'?'o':'uo'} setColor={this.props.setColor}/>
              </tr>
              <tr className='mobileNavBarAvoid'></tr>
          </tbody>
        </table>
      </div>;
  }
}


export default ColorPicker;
