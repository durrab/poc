
// and to keep it in the src/ directory.
import * as ReactDOM from "react-dom";
//import Hello from "./Hello";
import ReferYes from "./components/ReferYes"
import * as React from "react";
import {Provider as StoreProvider} from 'react-redux'
import configureStore from './store/configureStore'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import './css/styles.css'
export default class Main extends React.Component {

  constructor(props){
      super(props);
  }

  componentDidMount() {
    console.log('testing')
  }

  store = configureStore();

  render()  {
    return (
     
        <StoreProvider store={this.store}>
        
        <Router>
              <Route path="/" component={ReferYes}/>
          </Router>
        
          
        </StoreProvider>
    )
  }

}

ReactDOM.render(
      <Main/>   
    ,
  document.getElementById("root")
);
