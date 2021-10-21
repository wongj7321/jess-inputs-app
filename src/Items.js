import React from 'react';
import './InputsApp.css';

/** 
  * A class-based component for entering and displaying a list of items
  * It also illustrates checkboxes, radio buttons, and dropdown menus
  */
class Items extends React.Component {
    constructor(props) {
    super(props);
    this.state = {item: '', 
                  items: [],
                  dropDownSelected: '',  
                  checks: [], // Unlike in todoApp, use a parallel list
                              // of booleans to represent checked items
                  radioSelectedIndexString: '0', // Use 0 to select first item by default
                 }
    this.handleItemChange = this.handleItemChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
  }
 
  /** Event handler for typing in the textbox */
  handleItemChange(e) {
    // console.log(`handleChange: e.target.name=${e.target.name}; e.target.value=${e.target.value}`); 
    this.setState({item: e.target.value});
  }
  
  addItem() {
    let item = this.state.item.trim() // remove spaces around item 
    if (! (item === '' || // don't allow empty items
           this.state.items.includes(item))) { // don't allow item duplicates
      this.setState({items: [...this.state.items, item],
                     checks: [...this.state.checks, false],
                     item: ''}); // reset textbox for next entry
    } else {
      this.setState({item: ''}); // reset textbox for next entry
    }
  }
  
  /** Event handler for clicking on a checkbox */
  handleCheckChange(e) {
    this.setState({checks: this.state.checks.map( 
      (check, i) => // 2nd arg to map is index of bool
        // `test ? thenValue : elseValue` is JS syntax
        //  for conditional *expression*
        e.target.value === i.toString() ? !check : check )});
  }
  
  /** Event handler for clicking on a radio button */
  handleRadioChange(e) {
    this.setState({radioSelectedIndexString: e.target.value});
  }
  
  /** Event handler for selecting from the dropdown menu */
  handleDropDownChange(e) {
    this.setState({dropDownSelected: e.target.value});
   
  }
  
  render() {
    return (
      <div>   
        <h2>Items</h2>
          <h3>State</h3>
            <p>{JSON.stringify(this.state)}</p>
          <h3>UI</h3>
            <p>
              <input type="text" 
                     value={this.state.item} 
                     onChange={this.handleItemChange} />
               <button onClick={() => this.addItem()}>Add Item</button>
            </p>
           <ul>
             
             {this.state.items.map(
                 (item,index) => // 2nd arg to map is index of item
               // List items should have keys:
               // https://reactjs.org/docs/lists-and-keys.html#keys}
               <li key={item}>
                 <input type="radio" 
                        name="radioGroup"
                        checked={this.state.radioSelectedIndexString === index.toString()}
                        value = {index} // index integer is converted to a string
                                        // when it becomes a value attribute
                        onChange={this.handleRadioChange}
                  />
                 <input type="checkbox" 
                        checked={this.state.checks[index]}
                        value = {index} // index integer is converted to a string
                                        // when it becomes a value attribute
                        onChange={this.handleCheckChange}
                  /> 
                  <span className="itemClass">{item}</span>
              </li>)
            }
           </ul>
           <p>Favorite item:
             <select value={this.state.dropDownSelected} onChange={this.handleDropDownChange}>
              {this.state.items.map( 
                item => 
                 // List items should have keys:
                 // https://reactjs.org/docs/lists-and-keys.html#keys
                 <option value={item} key={item}>{item}</option>)}
            </select>
            Your favorite item is {this.state.dropDownSelected}
           </p>
           <p>The radio selected items is {
              // Need to convert string to int before using it as an array index
              this.state.items[parseInt(this.state.radioSelectedIndexString)]
             }
           </p>
        
           <p>The checked items are: {
              this.state.items 
              .filter( (item, index) => this.state.checks[index] ) // keep only checked items
              .join(", ") // concatenate filtered item strings with ', ' as separator
             }
           </p>   
      </div>      
    );
  }
}

export default Items;