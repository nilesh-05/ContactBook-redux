import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewContact from "./components/contacts/NewContact";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<div className="py-3">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/create" component={NewContact} />
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
