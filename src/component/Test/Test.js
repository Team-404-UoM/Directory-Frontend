import axios from 'axios';
 
import React,{Component} from 'react';
 
class Test extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        url:null,
        allurl:[]
      }
   
  }
  onChangeHandler=(event)=>{
    console.log(event.target.files[0]);
    
    this.setState({
      selectedFile:event.target.files[0],
      url:URL.createObjectURL(event.target.files[0]),
      loaded: 0,
     
    })
   
    console.log(this.state.url);
  }

  onClickHandler = () => {
    const imgurl={
      URL:this.state.url,
      
    }
    console.log(this.state.url);
    const data = new FormData() 
    data.append('file', this.state.selectedFile)   
    axios.post("http://localhost:4000/file/upload", data, { 
    }).then(res => { // then print response status
        console.log(res.statusText)})
        axios.post("http://localhost:4000/file/url",imgurl).then((res)=>{console.log(res)})
}
getallurl=()=>{
 axios.get("http://localhost:4000/file/allurl").then((res)=>{this.setState({allurl:res.data})}
 )
}
componentDidMount() {
  this.getallurl();
  console.log(this.state.allurl);
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
                <div>
                {this.state.allurl.map((url) => (
                <li>{url.URL}</li>,
                <img  src={url.URL} width="100px" height="100px"></img>))}

                </div>
           
            </div>
        
        </div>
      );
    }
  }
export default Test;