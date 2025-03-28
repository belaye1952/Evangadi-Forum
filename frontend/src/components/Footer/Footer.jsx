import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {IoLogoInstagram} from 'react-icons/io5';
import {BsYoutube} from "react-icons/bs";
import styles from "./footer.module.css";
import logo from "../../assets/evangadi-logo-footer.png";
function Footer() {
  return (
    <>
<div className={styles.outer_container}>
      <div className={styles.logo}size={1}>
          <img src={logo}alt="logo" />

        <div className={styles.social}>
         <FaFacebook size={27}/>
        <IoLogoInstagram size={27}/>
         <BsYoutube size={27}/>
        </div>
      </div>

<div className={styles.links}>
          
          <ul>
            <li><h3>Useful Link</h3></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>cd
        </div>

        <div className={styles.links}>
          <ul>
            <li><h3>Contact info</h3></li>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
    
        </div>
      </div>
  </>
 
  )
}

export default Footer