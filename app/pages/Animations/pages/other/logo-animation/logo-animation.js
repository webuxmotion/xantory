import gsap from 'gsap';
import './logo-animation.scss';

export default class LogoAnimation {
  constructor() {
    const tl = gsap.timeline();
    tl
      .from(
        document.querySelector('.logo-animation__letter--2'), 1, {
          y: -30
        }
      )
      .from(
        document.querySelector('.logo-animation__letter--3'), 2, {
          rotation: 90, 
          transformOrigin: "100% 50%"
        }, "-=1"
      )
      .from(
        document.querySelector('.logo-animation__letter--4'), 1, {
          y: '100%'
        }, "-=1"
      )
  }
}

new LogoAnimation;