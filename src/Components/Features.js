import React, { Component } from 'react'
import FeatureSection from './FeatureSection';

class Features extends Component {
    render () {
        return (
            <div>
                <section id="features">
					<div className="container">
						<div className="row">
							<FeatureSection title="News" mainContent="world" hreflink="#" imagelink="images/pic01.jpg"/>
							<FeatureSection title="Travel" mainContent="world" hreflink="#" imagelink="images/pic02.jpg"/>
							<FeatureSection title="Activity" mainContent="world" hreflink="#" imagelink="images/pic03.jpg"/>
							<FeatureSection title="Blog" mainContent="world" hreflink="#" imagelink="images/pic04.jpg"/>
						
							
						</div>
					</div>
				</section>
            </div>
        )
    }
}

export default Features