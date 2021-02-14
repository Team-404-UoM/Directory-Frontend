import React from "react";
import { Component } from "react";
import axios from "axios";
import pic2 from "../Forum/pic2.jpg";
import "./Blogview.css";
import moment from "moment";
import boxicons from "boxicons";

class BlogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      body: "",
      categorie: "",
      createtime: "",
      updatetime: "",
      show: true,
    };
  }

  componentDidMount() {
    //{if(this.props.location.query!=undefined){
    console.log(this.props);
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/Blog/` + this.props.location.query.id
      )
      .then((res) =>
        this.setState({
          title: res.data.blog.title,
          image: res.data.blog.image,
          body: res.data.blog.body,
          categorie: res.data.blog.categorie,
          createtime: res.data.blog.createdAt,
          updatetime: res.data.blog.updatedAt,
        })
      );
    console.log(this.state.title);
    //.catch((err)=>console.log(err))
  }
  handleSidebar() {
    this.setState({ show: false });
    console.log(this.state.show);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4" hidden={this.state.show}>
              <h1>hello</h1>
            </div>
            <div className={!this.state.show ? "col-8" : "col-12"}>
              <button class="openbtn" onclick={this.handleSidebar}>
                Comment
              </button>

              <React.Fragment>
                <div>
                  <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                    {this.state.title}
                  </h1>
                  <p style={{ fontSize: "13px", textAlign: "center" }}>
                    <img
                      src={pic2}
                      alt="blog-cover"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "15px",
                        marginTop: "-5px",
                        marginLeft: "0px",
                        borderRadius: "2px",
                      }}
                    />
                    <strong>Anushka Praveen </strong>
                    <span style={{ marginLeft: "40px" }}>
                    <box-icon  name='time' animation='flashing' size="xs" ></box-icon>
                      <strong>
                        Created At:{" "}
                        {moment(this.state.createtime).format("MMM DD ,YYYY")}
                      </strong>
                    </span>
                    <span style={{ marginLeft: "50px" }}>
                    <box-icon   name='time' animation='flashing' size="xs" ></box-icon>
                      <strong>
                        Updated At:{" "}
                        {moment(this.state.updatetime).format("MMM DD ,YYYY")}
                      </strong>
                    </span>
                  </p>
                  <p>
                    <span className="categorie-area">
                      Categorie | {this.state.categorie}
                    </span>
                  </p>
                  <img
                    src={this.state.image}
                    alt="Cover"
                    style={{
                      border: "1px solid gray",
                      width: "29.8rem",
                      height: "20rem",
                      marginLeft: "35%",
                      marginBottom: "30px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{ padding: "20px 50px 20px" }}
                    dangerouslySetInnerHTML={{ __html: this.state.body }}
                  ></p>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogView;
