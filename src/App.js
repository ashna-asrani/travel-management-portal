import logo from './logo.svg';
import './App.css';
import Sidebar from "../src/components/Sidebar"
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/AdminHome';
import Registration from './components/Registration';
import AdminHome from './components/AdminHome'
import AddFlightDetails from './components/AddFlightDetails'
import AddTrainDetails from './components/AddTrainDetails'
import UserHome from './components/UserHome';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import ForgotPassword from './components/ForgotPassword'
import ChangePassword from './components/ChangePassword'
import CheckOTP from './components/CheckOTP';
import BookFlight from './components/BookFlight'
import FlightList from './components/FlightList';
import SearchFlight from './components/SearchFlight';


function App() {
  return (

    <div>


      <Routes>
        <Route path="/" index element={<Login />}></Route>
        <Route path="/login" index element={<Login />}></Route>
        {/* <Route exact path="/" component={Login} /> */}
        <Route path="/register" exact element={<Registration />} />
        <Route path="/forgotPassword" exact element={<ForgotPassword />} />
        <Route path="/changePassword" exact element={<ChangePassword />} />
        <Route path="/checkOTP" exact element={<CheckOTP />} />
        <Route path="/adminHome" exact element={<AdminHome />} />
        <Route path="/addFlight" exact element={<AddFlightDetails />} />
        <Route path="/addTrain" exact element={<AddTrainDetails />} />
        <Route path="/userHome" exact element={<UserHome />} />
        <Route path="/searchFlight" exact element={<SearchFlight />} />
        <Route path="/flightList" exact element={<FlightList />} />
        <Route path="/bookFlight/:bookingId" exact element={<BookFlight />} />
        {/* <Route path="/bookFlight/:bookingId" exact render={(props) => <BookFlight {...props}/>} /> */}


      </Routes>
      {/* </Fragment> */}
    </div>
  );
}

export default App;
