import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import SideBar from "./components/SideBar";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <SideBar />
          <Routes>
            <Route path='/admin/cars' element={<CarList />} />
            <Route path='/admin/cars/add' element={<CarForm />} />
            <Route path='/admin/cars/edit/:id' element={<CarForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
