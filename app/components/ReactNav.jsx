const React = require('react');
const { Link, IndexLink } = require('react-router');




const ReactNav = React.createClass({

    onSearch(e) {
        e.preventDefault();        
    },
    render() {
        return (
<div className="top-bar">
    <div className="top-bar-left">
        <ul className="menu">
        <li className="menu-text"> Weather App</li>
        <li>
        <IndexLink to="/" activeClassName="active" activeStyle={ { fontWeight: 'bold' }}> Get Weather </IndexLink>
        </li>

                <li>
<Link to="/about" activeClassName="active" activeStyle={ { fontWeight: 'bold' }}> About </Link>
        </li>

                <li>
<Link to="/examples" activeClassName="active" activeStyle={ { fontWeight: 'bold' }}> Examples </Link>
        </li>

        </ul>
    </div>

    <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
           <ul className="menu">
            <li>
                <input type="search" placeholder="city" />
            </li>
            <li>
            <input type="submit" className="button" />
            </li>
           </ul>
        </form>
    
</div>
</div>
);
    }
});

module.exports = ReactNav;
