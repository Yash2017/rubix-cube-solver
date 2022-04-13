
import React from 'react';
import { AnimatePresence, motion} from 'framer-motion';
import orient from '../images/orient.png';
import grid from '../images/grid.png';
import solved from'../images/solved.png';

const FAQModal=({isFAQ,toggle})=>{
    return(
        <AnimatePresence>
            {isFAQ && (
            <motion.div 
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:30}}
            style={{
                zIndex: '1',
                position:"fixed",
                top:'20%',
                // left:'35%',
                background:'#303030',
              
                border:'2px solid black',
                color:'white',
            }}
            className='FAQBox'
            ><center>
                <table>
                    <tbody>
                        <tr>
                           
                                <td colSpan='2' width='100%'>
                                    <center>
                                        How To Use Rubix Cube Solver
                                    </center>
                                </td>
                            
                        </tr>
                        <tr className="FAQText">
                            <td width='70%'>      
                                        Step 1:
                                        <br></br>
                                        orient the cube with the white center facing forward, the green center facing up, and the orange center facing to the right.                                                              
                            </td>
                           <td width="30%" colSpan='2'>
                             <img alt='orientation diagram'src={orient} width='100%'></img>
                           </td>
                           </tr>
                            <tr className="FAQText">
                                <td width='70%'>
                                    Step 2:
                                    <br>
                                    </br>
                                    Colour in the cube using the color picker and map of the cube.
                                    <br></br>
                                    note: the color of the center pieces cannot be changed.
                               </td>
                               <td width='30%'>
                                <img src={grid} alt='grid diagram' width='100%'></img>
                               </td>
                           </tr>
                           <tr className="FAQText">
                                <td width='70%'>
                                    Step 3:
                                    <br>
                                    </br>
                                    Click Solve, and follow the instuctions that will display after a few seconds
                                    <br></br>
                                    note: can take up to 15 seconds
                               </td>
                               <td width='30%'>
                                <img src={solved} alt='solved diagram' width='100%'></img>
                               </td>
                           </tr>
                        
                        <tr>
                            <td colSpan='2'>
                                <center>
                                <motion.div className="closeFAQ" onClick={toggle}
                                    initial={{scale:0.9}}
                                    whileHover={{scale:1}}
                                    whileTap={{scale:0.8}}
                                >   
                                Okay
                                </motion.div>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            </motion.div>
            )}
        </AnimatePresence>
    )
}

export default FAQModal