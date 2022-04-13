import React from 'react';
import { AnimatePresence,motion } from "framer-motion";
import F from "../images/F.png";
import f from "../images/F'.png";
import R from "../images/R.png";
import r from "../images/R'.png";
import U from "../images/U.png";
import u from "../images/U'.png";
import L from "../images/L.png";
import l from "../images/L'.png";
import B from "../images/B.png";
import b from "../images/B'.png";
import D from "../images/D.png";
import d from "../images/D'.png";
import whiteCross from '../images/whiteCross.png'
import whiteCorners from '../images/whiteCorners.png'
import middleEdges from '../images/middleEdges.png'
import yellowCross from '../images/yellowCross.png'
import yellowCorners from '../images/yellowCorners.png'

class Solution extends React.Component{

    mapsteps(steps){
        let keyCounter=0;
        let styleBolean=true;
        let data=<table className='steps'><tbody>{steps.split("").map((turn)=>{
            if(turn.toUpperCase()===turn)
            {
            let val=<tr className={'solution'+styleBolean} key={keyCounter}><td><img className='turnIcon' width='150vmin' alt={turn}src={this.getImage(turn)}/></td><td className='turnText'>{turn}</td></tr>;
                styleBolean=!styleBolean;
                keyCounter++;
               return val;
            }
            else
            {
                let val=<tr className={'solution'+styleBolean} key={keyCounter}><td><img className='turnIcon' width='150vmin' alt={turn} src={this.getImage(turn)}/></td><td className='turnText'>{turn.toUpperCase()+"'"}</td></tr>
                styleBolean=!styleBolean;
                keyCounter++;
               return val;
            }
        })}</tbody></table>
       return data;
    }

    getImage(turn){
        switch(turn){
            case 'F':
            return F;
            case 'f':
            return f;
            case 'R':
            return R;
            case 'r':
            return r;
            case 'U':
            return U;
            case 'u':
            return u;
            case 'L':
            return L;
            case 'l':
            return l;
            case 'B':
            return B;
            case 'b':
            return b;
            case 'D':
            return D;
            case 'd':
            return d;
            default:
            break;
        }
    }

    render(){
        return(
            <AnimatePresence>
      {this.props.isVisible && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <table className='solution' cellSpacing='0'>
                <tbody>
                    <tr>
                         <td className='solutionHeading'>
                                        Solution  
                                        </td>
                    </tr>
                    <tr><td>
                        <table className='solutionSubHeading'>
                            <tbody>
                                <tr >
                                    <td className='subHeadingImage'>
                                        <center><img width='70%'alt='Part 1 White Cross'src={whiteCross}></img></center>
                                    </td>
                                    <td className='subHeadingText'>
                                    Part 1: White Cross ({this.props.sequence.whiteCross.length} steps)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.mapsteps(this.props.sequence.whiteCross)}
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <table className='solutionSubHeading'>
                            <tbody>
                                <tr >
                                    <td className='subHeadingImage'>
                                        <center><img width='70%' alt='Part 2 White Corners'src={whiteCorners}></img></center>
                                    </td>
                                    <td className='subHeadingText'>
                                    Part 2: White Corners ({this.props.sequence.whiteCorners.length} steps)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.mapsteps(this.props.sequence.whiteCorners)}
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <table className='solutionSubHeading'>
                            <tbody>
                                <tr >
                                    <td className='subHeadingImage'>
                                    <center><img width='70%'alt='Part 3 Middle Edges'src={middleEdges}></img></center>
                                    </td>
                                    <td className='subHeadingText'>
                                    Part 3: Middle Edges ({this.props.sequence.middleEdges.length} steps)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.mapsteps(this.props.sequence.middleEdges)}
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <table className='solutionSubHeading'>
                            <tbody>
                                <tr >
                                    <td className='subHeadingImage'>
                                    <center><img width='70%'alt='Part 4 Yellow Cross'src={yellowCross}></img></center>
                                    </td>
                                    <td className='subHeadingText'>
                                    Part 4: Yellow Cross({this.props.sequence.yellowCross.length} steps)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.mapsteps(this.props.sequence.yellowCross)}
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <table className='solutionSubHeading'>
                            <tbody>
                                <tr >
                                    <td className='subHeadingImage'>
                                    <center><img width='70%'alt='Part 5 Yellow Corners'src={yellowCorners}></img></center>
                                    </td>
                                    <td className='subHeadingText'>
                                    Part 5: Yellow Corners ({this.props.sequence.yellowCorners.length} steps)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.mapsteps(this.props.sequence.yellowCorners)}
                        </td>
                    </tr>
                </tbody>
            </table>
           
        </motion.div>
      )}
    </AnimatePresence>
        )
    }
}

    


 export default Solution