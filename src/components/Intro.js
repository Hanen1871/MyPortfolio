import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/hanen_iamge-removebg-preview.png'
import {Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./CV 2024.pdf";

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}



`


const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm ALAYA Hanen.</h3>
                    <h6>I Developer Web FullStack and Chemical Process Engineer.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
            <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            href={pdf}
            target="_blank"
            style={{ maxWidth: "200px", color:"rgb(117, 78, 26)"}} title='download my cv'
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="32" height="32" viewBox="0 0 48 48" ><rect width="48" height="48" fill="none"/>
            <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" >
                <path d="M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221"/><path d="M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40C32.785 40 31.8684 39.8683 30.9999 39.6221"/><path d="M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20"/>
            <path d="M17.0654 30.119L23.9999 37.0764L31.1318 30"/><path d="M24 20V33.5382"/></g></svg>
          </Button>
        </Row>
  
        </Box>

    )
}

export default Intro
