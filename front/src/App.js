import Markers from "./components/markers.component";
import Home from './components/Home';
import Profile from "./components/Profile.component"
import Appointement from "./components/appointment.component"
import History from './components/history.component'
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Test from "./components/test";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['colibrisID']);
  return (
    <div className="wrapper">
      <Header />

      <Router hashType="noslash">
      <Switch>
        <Route exact path="/" component={Home} />
        {cookies.colibrisID? (
          <div>
        <Route exact path ="/appointment" component={Appointement} />
        <Route exact path="/markers" component={Markers} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/history" component={History} />
        <Route exact path="/test" component={Test} />
          </div>
        ): (
          <div></div>
        )}
      </Switch>
    </Router>
    
    <Footer />
    </div>
    
  );
}

export default App;
