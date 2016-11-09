const React = require('react');
var {Link} = require('react-router');



const Examples = () => (<div>
<h1 className="text-center"> Examples </h1> <p> few examples</p>
<ol><li>
<Link to='/?location=Bucharest'>Bucharest, RO</Link>
</li>
</ol>
</div>
);

module.exports = Examples;
