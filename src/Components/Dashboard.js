import React, { useEffect, useState, Fragment } from 'react';
import Footer from './Common/Footer';
import { connect } from 'react-redux';
import { usersList } from '../redux/actions/usersList';
import classes from '../assests/css/Common.module.css';
import ListAlbum from './Albums/ListAlbum';
import Loader from './Common/Loader.js';

const Dashboard = (props) => {
  const [loader, changeloader] = useState(true);

  useEffect(() => {
    props
      .usersList()
      .then(() => {
        changeloader(false);
      })
      .catch((err) => {
        console.log(err);
        changeloader(true);
      });
  });

  return (
    <Fragment>
      <div className={classes.listWrapper}>{loader ? <Loader /> : <ListAlbum />}</div>
      <Footer />
    </Fragment>
  );
};

export default connect(null, { usersList })(Dashboard);
