
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
const onClearOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What to do?</button>
    <button onClick={onClearOptions}>remove</button>
    {
      // numbers.map((number) =>{
      //   return <p key={number}>Number: {number}</p>
      // })
    }
    <ol>
      {
        app.options.map((option) =>{
          return <li key={option}>{option}</li>
        })
      }
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
