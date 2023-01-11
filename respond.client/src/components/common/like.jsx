import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlineHeart } from "@fortawesome/free-regular-svg-icons";
import { render } from "@testing-library/react";
import "../../index.css";

// class App extends Component {
//     state = {
//         clicked: false
//     }

//     handleLike = () => {
//         this.setState({clicked: !this.state.clicked})
//     }

//     render() {
//         return (
//         <Like state={this.state.clicked} onClick={this.handleLike}></Like>
//         )
//     }
// }

// export default App;

const Like = ({ state, onClick }) => {
  const renderIcon = () => {
    return state ? faHeart : outlineHeart;
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={renderIcon()}
        size="1x"
        onClick={onClick}
        className="clickable"
      />
    </div>
  );
};

export default Like;
