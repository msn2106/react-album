import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initializeStore from "./Redux/Store/Store";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Album from "./components/Albums/ListAlbum";
import NotFound from "./components/Common/404";
import ListPhoto from "./components/Photos/ListPhoto";
import Photos from "./components/Photos/ListPhoto";
import logo from "./assests/images/photogalleryicon.png";

const InitiateApp = (props) => {
  const store = initializeStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='d-flex'>
          <div className='d-flex col-md-2'>
            <Link to='/'>
              <img className='brand' src={logo} alt='photoGallery logo' width={36} height={36}/>
            </Link>
            <h5 color="white">REACT ALBUM</h5>
          </div>
          <div className="col-md-10">
            <ul className='topnav'>
              <li>
                <Link to='/Album'>Albums</Link>
              </li>
              <li>
                <Link to='/Photos'>Photos</Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/Album' component={Album} />
          <Route exact path='/Photos' component={Photos} />
          <Route path='/photos/:id' component={ListPhoto} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default InitiateApp;
