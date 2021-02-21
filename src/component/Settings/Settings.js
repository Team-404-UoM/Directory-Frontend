import "./Settings.css";
import React, { Component } from "react";
import axios from "axios";

class Sidebar extends Component{
state={
  selectedFile:null
}

fileSelectedHandler=event=>{
  this.setState({
    selectedFile:event.target.files[0]
  })
  console.log(event.target.files[0]);
}

fileUploadHandler=()=>{
  const fd=new FormData();
  fd.append('image',this.state.selectedFile,this.state.selectedFile.name);

axios.post('',fd).then(res=>{
  console.log(res);
})

}
render() {
  return(<div>
<input type="file" onChange={this.fileSelectedHandler}/>
<button onclick={this.fileUploadHandler}>Upload</button>
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