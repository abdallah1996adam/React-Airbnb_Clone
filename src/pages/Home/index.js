import React from 'react';
import {placeService} from "../../services";
import {PlacesList} from "./Places";
import appContext from "../../store";
import "./home.scss";

class Home extends React.Component {

    static contextType = appContext;

    constructor(props) {
        super(props)
        this.state = {
            places:[],
            error:null
        }
    }

    async componentDidMount() {
        try {
            const response = await placeService.getAll();
            this.setState({ places: response.data.places})
            // console.log(response.data)
        } catch (e) {
            this.setState({ error: e.message });
        }
    }
    render() {
        const places = this.state.places;
        
        return (
            <>
                {this.state.error && <p>{this.state.error}</p>}
                <PlacesList data={places} />
            </>
        )
    }
}

export default Home;