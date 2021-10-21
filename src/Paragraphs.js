import React from 'react';
import './InputsApp.css';

/** 
  * A class-based component for entering and displaying a list of paragraphs
  */
class Paragraphs extends React.Component {
    constructor(props) {
    super(props);
    this.state = {par: '',
                  pars: []};
    this.handleParChange = this.handleParChange.bind(this);
    this.addPar = this.addPar.bind(this);
    }
  
  /** Event handler for typing in the textarea */
  handleParChange(e) {
    this.setState({par: e.target.value});
  }
  
  addPar() {
    let par = this.state.par.trim()
    if (! (par === '' )) {
      this.setState({pars: [...this.state.pars, this.state.par],
                     par: ''}); // reset textarea for next entry
    } else {
      this.setState({par: ''}); // reset textarea for next entry
    }
  }
   
  render() {
    return (
      <div>
        <h2>Paragraphs</h2>
          <h3>State</h3>
            <p>{JSON.stringify(this.state, null, 2)}</p>
          <h3>UI</h3>
            <textarea value={this.state.par} onChange={this.handleParChange} />
            <button onClick={() => this.addPar()}>Add Paragraph</button>          
            {this.state.pars.map( (par,index) => // 2nd arg to map is index of par
               // List items should have keys:
               // https://reactjs.org/docs/lists-and-keys.html#keys}
               <p className="par" key={index}>{par}</p>)}
      </div>
    );
  }
}

export default Paragraphs;