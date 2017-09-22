


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);

  }

  handleAddOption(option) {
    if (!option) {
      // empty string
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      // no duplicates
      return 'Option already exists';
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }


  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
        handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }
}
// =========================

class Header extends React.Component {
  render() {
    this.props
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePickOption}
          disabled={!this.props.hasOptions}
          >What to do?</button>
      </div>

    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }

      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption (e) {
    e.preventDefault(); // stop full page refresh

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      // (diff syntax) return {error};
      return {
        error: error
      };
    });
    e.target.elements.option.value = '';


  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
