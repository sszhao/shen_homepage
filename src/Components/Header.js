import React, { Component } from 'react'
import Navbar from './Navbar';

class Header extends Component {

    render () {
        return (
            <div>
				<Navbar />
                <section id="header">
					<div id="banner">
						<div className="container">
							<div className="row">
								<div className="col-6 col-12-medium">

										<p>We do something really useful, important, and unique. Learn all about it here ...</p>
										<a href="#" className="button-large">Go on, click me!</a>

								</div>
								<div className="col-6 col-12-medium imp-medium">

										<a href="#" className="bordered-feature-image"><img src="images/banner.jpg" alt="" /></a>

								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
        )
    }
}

export default Header