
const app = {
  title: 'This is an App',
  subtitle: 'This is a subtitle',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); // stop full page refresh

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};
const clearOptions = () => {
  app.options = [];
  renderApp();
};

const appRoot = document.getElementById('app');



const renderApp = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    <p>{app.options.length}</p>
    <button onClick={clearOptions}>remove</button>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>


    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
    </form>
  </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
// ======================
