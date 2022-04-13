
import React from 'react';
import { motion } from "framer-motion"


class Button extends React.Component{
  render(){
  return (
      <motion.div 
      initial={{scale:0.8}}
      whileHover={{scale:1}}
      whileTap={{scale:0.8}}
      className={this.props.solve!==undefined?this.props.solve+'button':'button'} 
      onClick={this.props.function}>
        {this.props.text}
      </motion.div>
  );
  }
}


  export default Button