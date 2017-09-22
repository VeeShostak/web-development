const app = {
  details: 'Here is the text',
  textVisible: false
};
const showText = () => {
  if (app.textVisible) {
    app.textVisible = false;
    renderApp();
  } else {
    app.textVisible = true;
    renderApp();
  }

}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showText}>{app.textVisible ? 'Hide details' : 'Show details'}</button>
      <p>{app.textVisible ? app.details : undefined}</p>
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
