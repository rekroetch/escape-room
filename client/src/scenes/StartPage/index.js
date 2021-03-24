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
border-radius: 18px;
margin: 206px 20px;
cursor: pointer;
box-shadow: 0px 20px 20px lightblue;
height:71px;
width:309px;
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
    <div className="background-startpage">
      <header className="greeting">
        Try to escape, {props.user ? props.user.email : "not logged in"}!
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress} Completed
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
              {/* <VFXSpan shader = {pixelateTransition}> */}
              <div className="resume-start">
              {progress > 0+"%" ? "RESUME" : "START GAME"}
              </div>
              {/* </VFXSpan> */}
            </Link>
            </Button>
            </VFXProvider>
          </div>
        </Col>
        <Col size="md-8">
          <VFXProvider>
            <div className="info-card">
              <div className="card-body">
                <h5 className="card-title title">You've been captured!</h5>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}>
                  The killer has knocked you unconscious while you're away from your friends. He drags you through the woods..
                </VFXSpan>  
                </p>
                <br></br>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}> 
                  You wake up, and you're tied up in the killer's office. He's about to deliver the killing blow, until he hears noise outside. It's your friends. This is your chance..
                </VFXSpan>
                </p>
                <br></br>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}> 
                  You are left all alone, and you have untied yourself. Your objective is to look around the office. It's up to you to get out, get your friends, and...
                </VFXSpan>
                </p>
                <br></br>
                <p className="card-text">
                <VFXSpan shader = {pixelateTransition}>
                  ESCAPE! Before it's too late..
                </VFXSpan>
                </p>
              </div>
            </div>
          </VFXProvider>
        </Col>
      </Row>
      <div className="night-background">
                <div class="forest-start">
                    <div class="moon"></div>
                    <div class="tree01-start"></div>
  	                <div class="tree02-start"></div>
  	                <div class="tree03-start"></div>
                    <div class="tree04-start"></div>
  {/* <!-- combi-container end --> */}
  
                </div>
{/* <!-- forest end --> */}
                <div class="forest-background-start"></div>
                <div class="road"></div>
            </div> 
    </div>
  );
}

export default StartPage;
