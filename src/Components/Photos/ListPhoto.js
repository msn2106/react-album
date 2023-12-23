import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { photosList } from '../../redux/actions/photosList';
import { albumsList } from '../../redux/actions/albumsList';
import Loader from '../Common/Loader';
import Pagination from '../Common//Pagination';
import PhotoCard from './PhotoCard';

class ListPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loader: true,
      currentPhotos: [],
      currentPage: null,
      totalPages: null
    };
  }

  componentDidMount() {
    this.props
      .photosList()
      .then(() => {
        this.setState({ loader: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loader: false });
      });

    this.props
      .albumsList()
      .then(() => {
        this.setState({ loader: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loader: false });
      });
  }

  onPageChanged = (data) => {
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPhotos = this.props.photos.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPhotos, totalPages });
  };

  render() {
    const { currentPhotos } = this.state;
    var totalPhotos = this.props.photos;

    return (
      <Fragment>
        {totalPhotos !== undefined && totalPhotos.length > 0 ? (
          <Fragment>
            <Pagination
              totalRecords={totalPhotos.length}
              pageLimit={21}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
            {currentPhotos.map((photos) => (
              <PhotoCard key={photos.id} photos={photos} />
            ))}
          </Fragment>
        ) : (
          <Loader />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    albums: state.albums
  };
};

export default connect(mapStateToProps, { photosList, albumsList })(ListPhoto);
