import ListAppointments from "./components/appointments.list";
import Markers from "./components/markers.component";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <div id="wrapper">
      <TopBar />
      <Sidebar />
      
      <div class="main">
        <div class="main-content">
          <div class="container-fluid">
            {/* <ListAppointments /> */}
            <Router hashType="noslash">
              <Switch>
                <Route
                  exact
                  path="/history"
                  component={ListAppointments}
                />
                <Route exact path="/markers" component={Markers} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
