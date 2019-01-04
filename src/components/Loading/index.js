import React from "react";
import "../../shareStyles/effectsComponents.css";

class Loading extends React.PureComponent {
  render() {
    const { loaderState } = this.props;
    return (
      <div className="containerLoading">
        <div className={`loader ${loaderState}`} />
        <span>{loaderState === "loading" ? "Loading..." : "¡Loaded!"} </span>
      </div>
    );
  }
}

export default Loading;
