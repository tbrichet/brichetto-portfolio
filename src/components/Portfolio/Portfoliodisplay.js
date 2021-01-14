
import React from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.jpg';
import './portfolio.css';

let imageArray = [
  {
    image: project1,
    title:'Munch-A-Movie',
    description:'description'
  },
  {
    image: project2,
    title:'MyHaus',
    description:'description' 
  },
   {
    image: project3,
    title:"Mamasita's Enchiladas",
    description:'description' 
  } ,
   {
    image:'https://picsum.photos/id/1003/1181/1772',
    title:'Project4',
    description:'description' 
  }
]
class Portfoliodisplay extends React.Component{
  renderChildrenView = (item ,index) =>{
    return (
      <div className='contentBox' key={index}>
        <div className='cardBox'>
          <div 
            style={{backgroundImage:`url(${item.image})`}} 
            className="imageStyle"/> 
          <div className='fontBox'>
            <p className='titleStyle'>{item.title}</p>
            <span>{item.description}</span>
          </div>

        </div>
        
     </div>
    )
  }
  render(){
    return(
      <React.Fragment>
         <Carousel 
          dataArray = {imageArray }
          autoplay={true}
          delay={10}
          carouselPostWidth={'400px'} 
          carouselPostHeight={150}
          carouselPostMargin={10}>
          {this.renderChildrenView}
          
         
          </Carousel>
      </React.Fragment>
    )
  }
}



class Carousel extends React.Component{
  state = {
    nowIndex:0,
  }
  componentDidMount(){
    if(this.props.autoplay){
      // this.autoPlay()
    }
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  autoPlay = () =>{
    this.timer = setInterval(()=>{
          this.changeImagePosition(2)
     },this.props.delay*1000);
  }

  conputedLeft = () =>{
    const {carouselPostWidth,carouselPostHeight,carouselPostMargin} = this.props
    const {nowIndex} = this.state
    console.log('nowIndex',nowIndex)
    let leftSpan = parseInt(`${-nowIndex * parseInt(carouselPostWidth)}`)
    return{
      left: carouselPostWidth.toString().match(/[%vw]/) != null ? 
      `calc(${leftSpan}% - ${carouselPostMargin*2*nowIndex}px)`: 
      `${leftSpan - (carouselPostMargin*2*nowIndex)}px`
    }
  }
  
  changeImagePosition = (index) =>{
     const {dataArray , block} = this.props
     const {nowIndex} = this.state
     // (1 + 1 + 3) % 3
     this.setState({
       nowIndex : (nowIndex + index +  dataArray.length) % dataArray.length
     })
  }
  
  render(){
    const {dataArray,carouselPostMargin,carouselPostWidth,carouselPostHeight} = this.props
    return(
      <div className='carouselContainer'>
        <div className="carouselArea">
          <div style={this.conputedLeft()} className="carouselPosts">
            {dataArray.map((imgaeUrl,index)=>{
              return(
               <div 
                 key={imgaeUrl} 
                  style={{
                    width:carouselPostWidth, 
                    height:carouselPostHeight,  
                    margin:`0px ${carouselPostMargin}px `,...this.props.carouselPostStyle}} 
                  className="carouselPostBox">
                  {this.props.children(imgaeUrl,index)}
               </div>
              )
            })}
        </div>
      </div>
      
        <div onClick={()=>this.changeImagePosition(-1)} className="controlLeft"><i className="fa fa-angle-left"  /></div>
        <div onClick={()=>this.changeImagePosition(1)} className="controlRight"><i className="fa fa-angle-right" /></div>
      </div>
    )
  }
}

export default Portfoliodisplay