
// Lifecycle methods: component added, removed, something in comp updates
// (populate array with data from DB when component first loaded)
// (save data as component updates)
// (class based components have this, not stateless func comp)
// 
// componentDidMount()
// componentDidUpdate(prevProps, prevState)
// componentWillUnmount()
// ... others available

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    console.log('fetching data');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('saving data');
  }
  componentWillUnmount() {

  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    // use () to implicitly return an object
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
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
      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat([option])
      //   };
      // });
      this.setState((prevState) => ({
        options: prevState.options.concat([option])
      }));
    }
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
IndecisionApp.defaultProps = {
  options: []
}
// =========================
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: 'Indecision'
};


const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOptions}
        >What to do?</button>
    </div>

  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />))
      }

    </div>
  );
};


const Option = (props) => {
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}

        >remove</button>
    </div>
  );
};


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

    // this.setState(() => {
    //   // (diff syntax) return {error};
    //   return {
    //     error: error
    //   };
    // });
    this.setState(() => ({error:error}));
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
