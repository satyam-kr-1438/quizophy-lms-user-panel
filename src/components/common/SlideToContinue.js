import React, { Component } from 'react' 
// import './SwipeableButton.css'
import { FaChevronRight } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

const slider = React.createRef();
const container = React.createRef();
let isTouchDevice
export default class SwipeableButton extends Component {
  
  state = {}

  componentDidMount() {
    isTouchDevice = 'ontouchstart' in document.documentElement;

    if(typeof document !="undefined" && isTouchDevice) {
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.stopDrag);
    } else {
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);  
    }
    this.containerWidth = container?.current?.clientWidth - 50;
  }

  onDrag =e=> {
    if(this?.unmounted || this?.state?.unlocked) return;
    if(this?.isDragging) {
      if(isTouchDevice) {
        this.sliderLeft = Math.min(Math.max(0, e?.touches[0]?.clientX - this?.startX), this?.containerWidth);
      } else {
        this.sliderLeft = Math.min(Math.max(0, e?.clientX - this?.startX), this?.containerWidth);
      }
      this.updateSliderStyle();
    }
  }

  updateSliderStyle =()=> {
    if(this.unmounted || this.state.unlocked) return;
    slider.current.style.left = (this?.sliderLeft + 50)+'px';
  }

  stopDrag =()=> {
    if(this.unmounted || this.state.unlocked) return;
    if(this.isDragging) {
      this.isDragging = false;
      if(this.sliderLeft > this.containerWidth * 0.9) {
        this.sliderLeft = this.containerWidth;
        if(this.props.onSuccess) {
          this.props.onSuccess();
          this.onSuccess();
        }
      } else {
        this.sliderLeft = 0;
        if(this.props.onFailure) {
          this.props.onFailure();
        }
      }
      this.updateSliderStyle();
    }
  }

  startDrag =e=> {
    if(this?.unmounted || this?.state?.unlocked) return;
    this.isDragging = true;
    if(isTouchDevice) {
      this.startX = e.touches[0].clientX;
    } else {
      this.startX = e.clientX;
    }
  }

  onSuccess =()=> {
    container.current.style.width = container.current.clientWidth+'px';
    this.setState({
      unlocked: true
    })
  }

  getText =()=> {
    return this.state.unlocked ? (this.props.text_unlocked || `Processing...`) : (this.props.text || 'Slide to Continue')
  }

  reset =()=> {
    if(this.unmounted) return;
    this.setState({unlocked: false}, ()=> {
      this.sliderLeft = 0;
      this.updateSliderStyle();
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() { 
    return (
      <div className='ReactSwipeButton'>
        <div className={'rsbContainer ' + (this.state.unlocked ? 'rsbContainerUnlocked' : '')} ref={container}>
          <div className='rsbcSlider' 
            ref={slider} 
            onMouseDown={this.startDrag} 
            style={{background: "#2883fb"}}
            onTouchStart={this.startDrag}>
            <span className='rsbcSliderText'>{this.getText()}</span>
            <span className='rsbcSliderArrow'>
              <FaAnglesRight style={{color:"white",transform:"scale(1.3)"}}/>
            </span>
            <span className='rsbcSliderCircle' style={{background: "#2883fb"}}></span>
          </div>
          <div className='rsbcText' onMouseOver={()=>{
              if(this.getText()=="Processing..."){
                this.reset()
              }
          }}>{this.getText()}</div>
        </div>
      </div>
    )
  }
}