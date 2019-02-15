
// and to keep it in the src/ directory.
import * as ReactDOM from "react-dom";
//import Hello from "./Hello";
import App from "./components/app"
import * as React from "react";
import {Provider as StoreProvider} from 'react-redux'
import configureStore from './store/configureStore'

export default class Main extends React.Component {

  constructor(props:any){
      super(props);
  }

  componentDidMount() {

  }

  store = configureStore();

  render() : JSX.Element | any {
    return (
      <StoreProvider store={this.store}>
        <App/>
      </StoreProvider>
    )
  }

}

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
