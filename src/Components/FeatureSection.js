import React, { Component } from 'react'

class FeatureSection extends Component {
    render () {

        const title = this.props.title || "blank"
        const mainContent = this.props.mainContent || "blank"
        const hreflink = this.props.hreflink || "#"
        const imagelink = this.props.imagelink || "#"

        return (
            <div className="col-3 col-6-medium col-12-small">
                <section>
                    <a href={hreflink} className="bordered-feature-image"><img src={imagelink} alt="" /></a>
                    <h2>{title}</h2>
                    <p>
                        {mainContent}
                    </p>
                </section>
            </div>            
        )
    }
}

export default FeatureSection