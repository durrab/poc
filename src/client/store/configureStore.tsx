import {createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import  rootReducer from '../reducers/root-reducer'
import thunk from 'redux-thunk'
import { rootEpic } from '../epics/root-epic'
import { composeWithDevTools } from 'redux-devtools-extension';



export default function configureStore(): any {

  const observableMiddleware = createEpicMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, observableMiddleware)));
  observableMiddleware.run(rootEpic);

  return store;

}
