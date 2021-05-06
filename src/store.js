import React from "react";

//dans ce fichier on gére (stock) le fait que l'utilisateur soit connecter ou non ce que vas nous permis de sécuirser nos routes et stocker les informations de l'utilisateur

//ici on vas utiliser le method create Context qui est herité de React et qui vas nous permis de definir ou mettre en place l'api context au sein de notre projet

const appContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
      setUser: this.setUser,
      setAuth: this.setAuth,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };
  setAuth = (boolean) => {
    this.setState({ isAuth: boolean });
  };

  render() {
    return (
      <appContext.Provider value={this.state}>
        {/* l'ideé est de Englober notre App (tous notre components) ce que nous permetrra par la suite dans n'importe quel les pages ou les diffrents dossiers dans notre App de pouvoir appeller un consumer pour récuprer et manipuler les données auxquelles j'ai défini dans mon Context */}
        {this.props.children}
      </appContext.Provider>
    );
  }
}

export {AppProvider};
export default appContext;
