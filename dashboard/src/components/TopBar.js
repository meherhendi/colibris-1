import React, { Component } from 'react';

class TopBar extends Component {
    render() { 
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
			<div className="brand">
				<a href="index.html"><img src="assets/img/logo-dark.png" alt="Klorofil Logo" className="img-responsive logo"/></a>
			</div>
			
		</nav>

            </div>
        );
    }
}
 
export default TopBar;