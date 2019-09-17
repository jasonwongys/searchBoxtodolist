import React, { Component } from 'react'
import List from './List'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ]
    }

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(item) {
    // Put our list into an array
    const list = this.state.list.slice();

    // Check to see if item passed in matches item in array
    list.some((el,i) => {
      if(el === item) {

        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });

    // Set state to list 
    this.setState({
      list: list
    });
  }

  addItem(e) {
    //Prevent button click from submitting form
    e.preventDefault();

    //Create variables for our list, the item to add,and our form
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if(newItem.value !="") {

      // Add the new item to the end of our list array
      list.push(newItem.value);
      //list.classList.add("animated","rotateInUpLeft");

      // The nwe use taht to set the state for list 
      this.setState({
        list: list
        
      });

      // Finally we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {

      //If the input doesnt have a value, make the border red since its required
      newItem.classList.add("is-danger");
    }
  }

  render() {
    return (
      
      <div className="content">
      <h1> Search Box with To do List</h1>
        <div className="container">
          <section className="section">
            <List items={this.state.list} delete={this.removeItem}  />
          </section>

          <section className="section">
            <form className="form" id="addItemForm">
              <input
                type="text"
                className="input"
                id="addInput"
                placeholder="something that needs to be done"/>
                
                <button className="button is-info" onClick={this.addItem}> Add Item </button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default App

