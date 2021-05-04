import axios from "axios";
import pic5 from "./pic5.png";
import React, { Component } from "react";
import "./Test.css";

const Test = () => {
  return (
    <div>
      <div id="chat-container">
        <div id="search-container">
          <input type="text" placeholder="search" />
        </div>
        <div id="conversation-list">
          {/* Chat preview component*/}
          <div className="conversation active">
            <img src="pic5.jpg" alt=" nisali" />
            <div className="title-text">vimeshi bhagya</div>
            <div class="created-date">1 hour ago</div>
            <div className="conversation-message">
              This is a message gjvtjgbnj kjgvlkdfjvld jvgdkfbl
            </div>
          </div>
          {/* End of chat preview */}
          <div className="conversation ">
            <img src="pic5.jpg" alt=" nisali" />
            <div className="title-text">vimeshi bhagya</div>
            <div className="created-date">Apr 16</div>
            <div className="conversation-message">
              This is a message gjvtjgbnj kjgvlkdfjvld jvgdkfbl
            </div>
          </div>
          <div className="conversation ">
            <img src="pic5.jpg" alt=" nisali" />
            <div className="title-text">Hasini Rodrigo</div>
            <div className="created-date">2 days ago</div>
            <div className="conversation-message">
              This is a message gjvtjgbnj kjgvlkdfjvld jvgdkfbl
            </div>
          </div>
          <div className="conversation ">
            <img src="pic5.jpg" alt=" nisali" />
            <div className="title-text">Sugath Silva</div>
            <div className="created-date">3 days ago</div>
            <div className="conversation-message">
              This is a message gjvtjgbnj kjgvlkdfjvld jvgdkfbl
            </div>
          </div>
          <div className="conversation">
            <img src="pic5.jpg" alt=" nisali" />
            <div className="title-text">Nilmini Dias</div>
            <div className="created-date">4 days ago</div>
            <div className="conversation-message">
              This is a message gjvtjgbnj kjgvlkdfjvld jvgdkfbl
            </div>
          </div>
        </div>
        <div id="new-message-container">
          <span>+</span>
        </div>

        <div id="chat-title">
          <span>Vimeshi Bhagya</span>
        </div>
        <div id="chat-message-list">
          {/* sent message component */}
          <div className="message-row you-message">
            <div className="message-content">
              <div className="message-text">ok then</div>
              <div className="message-time">Apr 16</div>
            </div>
          </div>

          {/* Recevied message component */}
          <div className="message-row other-message">
            <div className="message-content">
              <img src="pic5.jpg" />
              <div className="message-text">
                yeah it is better to do that hud vjfvkf dkfjvdfjnbk jdfjvgkdfjbk
                yeah it is better to do that hud vjfvkf dkfjvdfjnbk jdfjvgkdfjbk
              </div>
              <div className="message-time">Apr 16</div>
            </div>
          </div>
        </div>
        <div id="chat-form">
          <input type="text" placeholder="type a message here..." />
        </div>
      </div>
    </div>
  );
};

export default Test;
