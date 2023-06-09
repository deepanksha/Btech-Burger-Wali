import React from 'react';
import {Link} from "react-router-dom"
import {RiFindReplaceLine} from "react-icons/ri"

const me = "https://avatars.githubusercontent.com/u/108534677?v=4";

const About = () => {
  return (
   <section className="about">
    <main>
        <h1>About Us</h1>

        <article>
            <h4>BTECH Burger wali </h4>
            <p>We are BTECH Burger Wali. The place for most tasty burger on the entire earth . </p>
            <p>
                Explore the various type of food and burgers.Click below to see the menu 
            </p>
            <Link to="/">
              <RiFindReplaceLine/>
            </Link>
        </article>
        
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Deepanksha Pal</h3>
                </div>
                <p>
                    I am Deepanksha Pal, the founder of MBA Burger Wali. Affiliated to God Taste...
                </p>
            </article>
        </div>
    </main>
   </section>
  )
}
 
export default About