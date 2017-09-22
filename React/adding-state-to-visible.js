class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visible: false,
      text: 'This is the hidden message!'
    };
  }
  handleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        <p>{this.state.visible ? this.state.text : undefined}</p>
      </div>
    );
  }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
