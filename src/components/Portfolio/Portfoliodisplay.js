
// import Carousel from 'react-bootstrap/Carousel';

import React, { Component } from 'react';
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.jpg';

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class Portfoliodisplay extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}
            >
              <div style={{ width: "100%", height: "75%" }}>
                <img
                  style={{ width: "50%", height: "50%", position: "relative" }}
                  src= {project1}
                />
                <div className="carousel-caption">Munch-A-Movie</div>
              </div>
              <div style={{ width: "100%", height: "75%" }}>
                <img
                  style={{ width: "50%", height: "50%", position: "relative" }}
                  src= {project2}
                />
                <div className="carousel-caption">MyHaus</div>
              </div>
              <div style={{ width: "100%", height: "75%" }}>
                <img
                  style={{ width: "50%", height: "50%", position: "relative" }}
                  src= {project3}
                />
                <div className="carousel-caption">Mamacitas Enchiladas</div>
              </div>
              
            </RBCarousel>
          </Col>
          <Button bsStyle="primary" onClick={this._autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </Button>
        </Row>
      </div>
    );
  }
}


// export class Portfoliodisplay extends Component {  
//   render() {  
//     return (  
//       <div>  
//         <div class='container-fluid' >  
//         <div className="row title" style={{ marginBottom: "20px" }} >  
//         <div class="col-sm-12 btn btn-warning">  
//                             How To Use Bootstrap Carousel In ReactJS 
//                            </div>  
//                            </div>  
//                            </div>  
//                            <div className='container-fluid' >  
//                            <Carousel>  
//                            <Carousel.Item style={{'height':"300px"}} >  
//                            <img style={{'height':"300px"}}  
//                            className="d-block w-100"  
//                           src={ project1 }  />  
//                              <Carousel.Caption>  
//                                <h3>Munch a Movie </h3>  
//                                    </Carousel.Caption>  
//                                    </Carousel.Item  >  
//                                    <Carousel.Item style={{'height':"300px"}}>  
//                                    <img style={{'height':"300px"}}  
//                                      className="d-block w-100"  
//                                       src={ project2 }    />  
//                                          <Carousel.Caption>  
//                                      <h3>MyHaus</h3>  
//                                         </Carousel.Caption>  
//                                            </Carousel.Item>  
//                                          <Carousel.Item style={{'height':"300px"}}>  
//                                          <img style={{'height':"300px"}}  
//                                           className="d-block w-100"  
//                                            src={ project3 }   />  
//                                           <Carousel.Caption>  
//                                             <h3>Mamasita's Enchiladas</h3>  
//                                             </Carousel.Caption>  
//                                            </Carousel.Item>  
//                                           </Carousel>  
//                                   </div>  
//                           </div>  
//                   )  
//           }  
//   }  

  export default Portfoliodisplay