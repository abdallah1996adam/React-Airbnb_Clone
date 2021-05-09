import React from 'react';

class Search extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input placeholder="Ville"/>
                    <input placeholder="Arrivée"/>
                    <input placeholder="départ"/>
                    <input type="submit" />
                </form>
                
            </div>
        )
    }
}

export default Search;