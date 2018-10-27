import React, { Component } from 'react'

class ContentHeader extends Component {
    render () {
        const title = this.props.title || "blank"
        const subtitle = this.props.subtitle || "blank"
        

        return (
            <div>
                <header>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </header>
            </div>
        )
    }
}

export default ContentHeader