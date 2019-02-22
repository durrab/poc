import * as React from "react";
import './css/style.css';

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div className="hello">Hello {this.props.name}</div>;
  }
}

export default Hello;
