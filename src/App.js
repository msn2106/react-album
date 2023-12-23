import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initializeStore from './redux/store/store';
import { Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Album from './components/Albums/ListAlbum';
import NotFound from './components/Common/404';
import ListPhoto from './components/Photos/ListPhoto';
import Photos from './components/Photos/ListPhoto';
import logo from './assests/images/photogalleryicon.png';

const InitiateApp = () => {
  const store = initializeStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="">
          <div style={{ display: 'flex' }}>
            <div style={{ width: '120px', marginLeft: '15px' }}>
              <Link to="/">
                <img
                  className="brand"
                  src={logo}
                  alt="photoGallery logo"
                  width="auto"
                  height="auto"
                />
              </Link>
            </div>
            <div style={{ width: '-webkit-fill-available', color: 'aliceblue' }}>
              <h4>REACT PHOTO ALBUM</h4>
            </div>
          </div>
          <ul className="topnav">
            <li>
              <Link to="/Album">Albums</Link>
            </li>
            <li>
              <Link to="/Photos">Photos</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Album" component={Album} />
          <Route exact path="/Photos" component={Photos} />
          <Route path="/photos/:id" component={ListPhoto} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default InitiateApp;
