const React = require('react');
const ReactNav = require('ReactNav');

const Main = (props) => (<div><ReactNav />         
<h2>Main component</h2>
{props.children}
  </div>);

module.exports = Main;
