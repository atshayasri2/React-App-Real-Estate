import React, { useEffect, useState } from "react";
// import Header from "./components/Header/Header";
import Header from "header-component-typescript/Header";
import Footer from "./components/Footer/Footer";
// import Office from "./components/PropertyTypes/Office";
// import Apartment from "./components/PropertyTypes/Apartment";
// import House from "./components/PropertyTypes/House";
// import Villa from "./components/PropertyTypes/Villa";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apidemo from "./components/PropertyFullDetails/APIdemo";
import HomeMain from "./homeMain";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./store/reducer";
import "./App.css";
import FinalizedProperty from "./components/FinalizedProperty/FinalizedProperty";

const store = createStore(
  allReducers(),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <img
            src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
            alt="loading"
          />
        </div>
      ) : (
        <Provider store={store}>
          <div className="App">
            <Router>
              <Header />
              <div>
                <Switch>
                  <Route path="/" exact component={HomeMain} />
                  <Route path="/products/:id" component={apidemo} />
                  <Route
                    path="/FinalizedProperties"
                    component={FinalizedProperty}
                  />
                  {/* <Route path="/products/:name/:id?" component={House} /> */}
                  {/* <Route path="/products/house" component={House} />
              <Route path="/products/office" component={Office} />
              <Route path="/products/apartment" component={Apartment} /> */}
                </Switch>
                <Footer />
              </div>
            </Router>
          </div>
        </Provider>
      )}
    </>
  );
}
export default App;
