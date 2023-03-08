import React from "react"
import classes from "./footer.module.css"
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
  return (
    <section id="faq" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2 className={classes.title}>Working days</h2>
          <ul className={classes.list}>
            <li>Monday - Friday</li>
            <li className={classes.workingTime}>8.00am to 10.00pm</li>
            <li>Saturday</li>
            <li className={classes.workingTime}>8.00am to 11.00pm</li>
            <li>Sunday Holiday</li>
            
          </ul>
        </div>
        
        <div className={classes.col}>
          <h2 className={classes.title}>Social Media</h2>
          <ul className={classes.iconList}>
            <li><AiFillInstagram /></li>
            <li><AiFillFacebook /></li>
            <li><AiFillTwitterCircle /></li>
          </ul>
        </div>
      </div>
        <div className={classes.attribution}>
        <h2>About App: </h2>
        <div style={{marginLeft: '6px',fontSize:'20px'}}>
        <div >
          <p>Food delivery is a home delivery service in which a store restaurant, </p>
          <p>or third-party app delivers food to consumers, whenever they ask for it.</p>
          <p>These days, the offers are generally placed through a mobile app, website, or phone.</p>
        </div>
        
        </div>
       </div>
    </section>
  )
}

export default Footer