import axios from 'axios';
 
import React,{Component} from 'react';
 
class Test extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        url:null
      }
   
  }
  onChangeHandler=event=>{
    console.log(event.target.files[0]);
    this.setState({
      selectedFile:event.target.files[0],
      url:URL.createObjectURL(event.target.files[0]),
      loaded: 0,
    })
    console.log(this.url);
  }

  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    
    axios.post("http://localhost:4000/file/upload", data, { 

    })

      .then(res => { // then print response status
        console.log(res.statusText)
       
      
        
    
})
}
    
    render() {
    
      return (
        <div>
            
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={this.onChangeHandler} />
                <button onClick={this.onClickHandler}>
                  Upload!
                </button>
                <div style={{padding:"50px"}}>
                <img  src={this.state.url} width="200px" height="200px"/>
                </div>
           
            </div>
        
        </div>
      );
    }
  }
export default Test;