
import React from 'react';
import { motion } from "framer-motion"


class Color extends React.Component{
  render(){
  return (
      <td><motion.div initial={{scale:0.8}} whileHover={{scale:1}} whileTap={{scale:0.9}} className={'c'+this.props.color} onClick={this.props.setColor.bind(this,this.props.color[1])} /></td>
  );
  }
}


  export default Color