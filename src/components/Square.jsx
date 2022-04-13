import React from 'react';
import { motion } from "framer-motion";


class Square extends React.Component{


  render(){
  return (
  <motion.div initial={{scale:0.8}} whileHover={{scale:1}} whileTap={{scale:0.8}} className={this.props.color} onClick={this.props.changeColor.bind(this,this.props.x,this.props.y)} >
    {/* [{this.props.y},{this.props.x}] */}
    </motion.div>
  );
  }
}


  export default Square