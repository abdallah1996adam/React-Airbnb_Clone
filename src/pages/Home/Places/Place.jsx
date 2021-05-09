import React from "react";
import { withRouter } from "react-router-dom";
//juste pour test

class Place extends React.Component {
    render() {
        
        return (
            <article onClick={(e) => this.props.history.push("/aDefinir" + this.props.id)}>
                <img src={ this.props.image_url} alt={this.props.name}/>
                <h4>{ this.props.name }</h4>
                <p>{ this.props.description }</p>
                <p>{ this.props.rooms } chambres - { this.props.guests } voyageurs</p>
            </article>
        )
    }
}

export default withRouter(Place)