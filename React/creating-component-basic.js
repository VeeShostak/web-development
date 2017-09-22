

class Header extends React.Component {
  // render required to be defined by Component class
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What to do?</button>
      </div>

    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        bye
      </div>
    );
  }
}


const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'))
