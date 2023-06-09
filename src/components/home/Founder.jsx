import React from 'react';
import { motion } from 'framer-motion';


const me =" https://avatars.githubusercontent.com/u/108534677?v=4"
const Founder = () => {

    const options={
        initial:{
         x:"-100%",
         opacity:0,
        },
        whileInView:{
         x:0,
         opacity:1,
        }
    };

  return (
    <section className="founder">
        <motion.div
        {...options}
        >
          <img src={me} alt="Founder" height={200} width={200}/>   
          <h3>Deepanksha Pal</h3>
          <p>
           Hey,Everyone I am Deepanksha Pal, the founder of BTECH Berger Wali.
           <br />
           Our aim is to create the most tasty burger on planet.
          </p>
        </motion.div>
    </section>

  )
}

export default Founder