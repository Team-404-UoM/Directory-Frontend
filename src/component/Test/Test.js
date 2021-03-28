import axios from 'axios';
 
import React,{Component} from 'react';
 
class Test extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        url:null,
        imgname:null,
        allurl:[]
      }
   
  }
  onChangeHandler=(event)=>{
    
    
    this.setState({
      selectedFile:event.target.files[0],
      url:URL.createObjectURL(event.target.files[0]),
      
      loaded: 0,
     
    })
   
    
  }

  onClickHandler = () => {
    const imgname={
      
     url:this.state.selectedFile.name
     
      
    }
    
    //console.log(imgname)
   
    const data = new FormData() 
    data.append('file', this.state.selectedFile)   
    axios.post("http://localhost:4000/file/upload", data, { 
    }).then(res => { // then print response status
        console.log(res.statusText)})
        axios.post("http://localhost:4000/file/url",imgname).then((res)=>{console.log(res)})
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
                {this.state.allurl.map((url) => 
                //<li>{url.url}</li>,
                <img  src={`http://localhost:4000/images/${url.url}`} width="100px" height="100px"/> 
                )}<div><img  src={`http://localhost:4000/images/undefined-test.jpg`} width="100px" height="100px"/></div>

                </div>  
           <button >click</button>
            </div>
            
        
        </div>
        //test commit
      );
    }
  }
export default Test;