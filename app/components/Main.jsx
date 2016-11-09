const React = require('react');
const ReactNav = require('ReactNav');

const Main = (props) => (<div><ReactNav /> 
<div className="row">

<div className="columns medium-6 large-4 small-centered">
{props.children}
</div>

</div>


  </div>);

module.exports = Main;
