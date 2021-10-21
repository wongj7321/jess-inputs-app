/* InputsApp is an app that illustrates so-called controlled inputs in React. 
 * In this version, the Paragraphs, Items, and InputApps components
 * are **class-based components**; see InputsAppWithHoooks for a version
 * with function-based components. 
 */ 

import React from 'react';
import './InputsApp.css';
import Paragraphs from './Paragraphs';
import Items from './Items';
import ErrorBoundary from './ErrorBoundary';

/** 
  * A class-based component that combines the Paragraph and Item components
  */
class InputsApp extends React.Component {
  // No need for constructor, since does nothing more than the default
  
  render() {
    return (  // uses ErrorBoundary for more debuggable errors 
      <div>
        <h1>Inputs App</h1>
          <ErrorBoundary>
            <Paragraphs />
          </ErrorBoundary>

          <ErrorBoundary>
            <Items />
          </ErrorBoundary>
     </div>
    );
  }
}

export default InputsApp;