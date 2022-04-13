import React from 'react';
import Square from './Square'

class Board extends React.Component {
  

    render() { 
      return <div className="Rubix-board">
          <table>
            <tbody>
    {this.props.board.map((row,y)=>(<tr key={y}>
    {row.map((square,x,)=>(<td key={x}><Square color={square}x={x}y={y}changeColor={this.props.changeColor}/></td>))}
    </tr>))}
    </tbody>
          </table>
          </div>;
    }
  }



export default Board;
