import "./Settings.css";
import React, { Component } from "react";
import axios from "axios";

class Sidebar extends Component{
  constructor(props) {
    super(props);
this.state={
  show:false,
  width:{width:'0%'},
}
this.handlechnage=this.handlechnage.bind(this);
this.handleclosechange=this.handleclosechange.bind(this)}

handlechnage(){
  
  this.setState({
    show:true,
    width:{width:'30%'}
   
  })
  console.log(this.state.show)
}

handleclosechange(){
  this.setState({
    show:false,
    width:{width:'0%'}
  })
}
handlelocal(){
  localStorage.removeItem("testvalue")
}



render() {
 const value=localStorage.getItem('testvalue')
  return(<div>
<div className={'sidebar'} style={this.state.width}>
<button onClick={this.handleclosechange} type="button" class="btn-close btn-close-white closeButton" aria-label="Close"></button>
<h1>hello</h1></div>
<button onClick={this.handlechnage}>Side bar</button>
<button onClick={this.handlelocal}>cler bar</button>
<h1>{value}</h1>
  </div>)
}
}


/* export const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else { 
      setX(-width); 
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></button>
        <div className="content">{children}</div>
        <div>
          
        </div>
      </div>
    </React.Fragment>
  );
}; */

export default Sidebar;