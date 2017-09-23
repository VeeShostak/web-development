import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePickOption = this.handlePickOption.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //
  //   // this.state = {
  //   //   options: []
  //   // };
  // }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  };

  handlePickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);

  };

  handleAddOption = (option) => {
    if (!option) {
      // empty string
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      // no duplicates
      return 'Option already exists';
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat([option])
      }));
    }
  };

  componentDidMount() {

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({options: options}));
      }

    } catch (e) {
      // if invalid json do nothing
    }


  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);

    }

  }
  componentWillUnmount() {

  }


  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }
}
