import { createGlobalStyle } from 'styled-components'; 
import BackgroundImage from '../assets/images/background.jpg'; 

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    outline: 0; 
    box-sizing: border-box;
  }

  #root {
    margin: 0 auto;
  }

  /* below works very well for background image for entire app - tested on many viewports */
  html {
    background: url(${BackgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; 
    height: 100vh;
  }
`;