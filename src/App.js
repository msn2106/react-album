import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initializeStore from "./redux/store/store";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Album from "./components/Albums/ListAlbum";
import AddAlbum from "./components/Albums/AddAlbum";
import NotFound from "./components/Common/404";
import ListPhoto from "./components/Photos/ListPhoto";
import Photos from "./components/Photos/ListPhoto";
import logo from "./assests/images/photogalleryicon.png";

const InitiateApp = () => {
  const store = initializeStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="">
          <div style={{ display: "flex" }}>
            <div style={{ width: "120px", marginLeft: "15px" }}>
              <Link to="/react-album">
                <img
                  className="brand"
                  src={logo}
                  alt="photoGallery logo"
                  width="auto"
                  height="auto"
                />
              </Link>
            </div>
            <div style={{ width: "-webkit-fill-available", color: "aliceblue" }}>
              <h4>REACT PHOTO ALBUM</h4>
            </div>
          </div>
          <ul className="topnav">
            <li>
              <Link to="/react-album/Album">Albums</Link>
            </li>
            <li>
              <Link to="/react-album/Photos">Photos</Link>
            </li>
            <li>
              <Link to="/react-album/AddAlbum">Add Album</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/react-album" component={Dashboard} />
          <Route exact path="/react-album/Album" component={Album} />
          <Route exact path="/react-album/Photos" component={Photos} />
          <Route exact path="/react-album/AddAlbum" component={AddAlbum} />
          <Route path="/react-album/photos/:id" component={ListPhoto} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default InitiateApp;
