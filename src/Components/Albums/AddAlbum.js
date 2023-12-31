import React, { Component } from "react";

class AddAlbum extends Component {
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
    return (
      <>
        <div className="container"></div>
      </>
    );
  }
}

export default AddAlbum;
