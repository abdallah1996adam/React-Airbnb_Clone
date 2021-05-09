import React from "react";
import Place from "./Place"

class PlacesList extends React.Component {
    render() {
        return (
            <section className="container">
                { this.props.data.map((article, i) => (
                    <Place key={i} name={article.placeName} description={article.description} guests={article.max_guests} rooms={article.rooms} image_url={article.image_url}/>
                ))}
            </section>
        )
    }
}

export default PlacesList;