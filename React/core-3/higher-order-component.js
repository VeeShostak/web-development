// Higher Order Component (HOC): 
// A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// takes component you want to wrap
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// takes component you want to wrap
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// check if admin true. (ex data changes, they login, now they are an admin)
ReactDOM.render(<AdminInfo isAdmin={true} info="Sample information" />, document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAuthenticated={true} info="Sample information" />, document.getElementById('app'));
