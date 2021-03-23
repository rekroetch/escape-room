import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"
import styled from "styled-components"
import { VFXProvider, VFXSpan, VFXVideo, VFXImg } from 'react-vfx';

const Button = styled.button`
background-color: #FF6760;
font-family: courier;
text-transform: uppercase;
border-radius: 48px;
margin: 10px 20px;
cursor: pointer;
box-shadow: 0px 20px 20px lightblue;
height:70px;
width:232px;
`;

export const pixelateTransition = `
precision mediump float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform float enterTime;
uniform sampler2D src;
void main (void) {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    if (enterTime < 1.5) {
        float t = enterTime / 1.5;
        float b = floor(t * 64.);
        uv = (floor(uv * b) + .5) / b;
    }
    gl_FragColor = texture2D(src, uv);
}
`

function StartPage (props) {

  let count = 0

  if(props.puzzle && props.puzzle.length) {
    for (var i = 0; i < props.puzzle.length; i++) {
      if (props.puzzle[i].isSolved) {
        count += 1
      }
    }
  }

  const progress = Math.floor((count/3)*100) +"%"
  console.log(`count: ${count}, progress: ${progress}`)


  return (
    <div className="background">
      <header className="greeting">
        Try to escape, {props.user ? props.user.email : "not logged in"}!
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}
        </div>
      </div>
      <Row>
        <Col size="md-4">
          <div className="startBtn">
            <VFXProvider>    
            <Button>
            <Link
              to="/office"
              className="start"
            >
              <VFXSpan shader = {pixelateTransition}>
              {progress > 0+"%" ? "RESUME" : "START GAME"}
              </VFXSpan>
            </Link>
            </Button>
            </VFXProvider>
          </div>
        </Col>
        <Col size="md-8">
          <VFXProvider>
            <div className="card text-white bg-dark justify-content-center info">
              <div className="card-body">
                <h5 className="card-title title">Background Story</h5>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}>
                  This story is about the newly wed couple, Ponnie and Blyde, who just bought their first house! Unfortunately, a couple of months later the relationship became very strained and distant...
                </VFXSpan>  
                </p>
                <br></br>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}> 
                  Arguments every night and tension whenever they were next to each other. Blyde would often stay in his office for countless hours at night, then head to work in the morning. One day Blyde got off work an hour early and saw a car leave the house. The first thing that came to mind was that Ponnie was having an affair. This angered Blyde greatly, and as soon as he entered the house he confronted her and things got heated... 
                </VFXSpan>
                </p>
                <br></br>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}> 
                  Several weeks later Ponnie's mom showed up at the house because Ponnie hadn't been picking up her phone calls. When she entered the house she was hit with a horrible stench and an eerie silence. She made her way toward Blyde's office and noticed a bloody footprint. Fearing the worst, she opened the door to the office and screamed when she saw Ponnie's pale body crumbled on the floor, surrounded by a puddle of dried blood and Blyde nowhere to be found...
                </VFXSpan>
                </p>
                <br></br>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}>
                  Your role as the lead detective is to search the room and find evidence tying Blyde to the murder of his wife. However, as you are searching, you start to hear a ticking. YOU TRIGGERED A BOMB!!! With the limited time, you must search the room before it blows up and all evidence is lost! Good luck!
                </VFXSpan>
                </p>
              </div>
            </div>
          </VFXProvider>
        </Col>
      </Row>
    </div>
  );
}

export default StartPage;
