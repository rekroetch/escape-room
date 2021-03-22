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
                This story is about a newly wed couple who just got there first house! Couple months go by and the couple starts to act very distant...
              </VFXSpan>  
              </p>
              <p className="card-text">
              <VFXSpan shader = {pixelateTransition}> 
                Ponnie and Blyde were the couples names, ever since they moved in together everything changed between them. Arguments every night and tension when ever theyre next to each other. Blyde would often just stay in his office for countless hours at night then head to work in the moring. One day Blyde gets off work a hour early and sees a car leave the house. The first thing that comes to his mind is that Pommie is having an affair. This angered Blyde greatly, as soon as he entered the house he confronted her and things get heated. A couple weeks later Pommies mom shows up to the house because Pommie hasnt been picking up her phone calls. As her mom enters the house it was completely quiet, she moves her way toward Blydes office as she notices a bloody footprint. There Pommie lies pale with a puddle of blood with Blyde no where to be found. Immediately her mom calls the police...
              </VFXSpan>
              </p>
              <p className="card-text">
              <VFXSpan shader = {pixelateTransition}>
                Within this game you play as the detective that solves this tragic love story.
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
