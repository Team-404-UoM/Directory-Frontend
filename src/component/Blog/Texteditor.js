import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export default class Texteditor extends Component {

    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
          contentState,
        }
      }
    
      onContentStateChange = (contentState) => {
        this.setState({
          contentState,
        });
        
      };

      componentDidMount() {
        console.log("mounted")
    };


    
      render() {
        const { contentState } = this.state;
        return (
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onContentStateChange={this.onContentStateChange}
          />
        );
      }
    }
    
    