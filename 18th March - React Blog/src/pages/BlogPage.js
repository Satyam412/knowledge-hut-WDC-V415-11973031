import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import React from "react";
import "./BlogPage.css";
import AllSubscribers from "../components/AllSubscribers";

class BlogPage extends React.Component {
  state = {
    isLiked: false,
    count: 0,
  };

  render() {
    return (
      <>
        <Navbar />
        <h1>This is Blog page</h1>
        <p>
          Consectetur nisi officia et ad nostrud dolor elit dolore reprehenderit
          est adipisicing laboris. Consectetur nisi officia et ad nostrud dolor
          elit dolore reprehenderit est adipisicing laboris. Consectetur nisi
          officia et ad nostrud dolor elit dolore reprehenderit est adipisicing
          laboris. Consectetur nisi officia et ad nostrud dolor elit dolore
          reprehenderit est adipisicing laboris. Consectetur nisi officia et ad
          nostrud dolor elit dolore reprehenderit est adipisicing laboris.
        </p>
        <button
          onClick={() => {
            this.setState({
              isLiked: !this.state.isLiked,
            });
            if (this.state.isLiked == false) {
              this.setState({ count: this.state.count + 1 });
            }
          }}
          className={this.state.isLiked ? "liked" : "notLiked"}
        >
          Like ({this.state.count})
        </button>
        <AllSubscribers />
        <Footer />
      </>
    );
  }
}

export default BlogPage;
