import { Component } from 'react';
import './App.css';
import ImageGallery from './Components/ImageGallery/imageGallery.jsx';
import fetchImages from './Components/Utils/fetchApi.jsx';
import { Searchbar } from './Components/Searchbar/Searchbar.jsx';
import Modal from './Components/Modal/Modal.jsx';
import Spinner from './Components/Loader/Loader.jsx';
import LoadMoreButton from './Components/Button/Button.jsx';
// import { scroll } from './Components/Utils/Scroll.jsx';
import { ToastContainer, toast } from 'react-toastify';
// import { toast, Toaster } from "react-hot-toast";

class App extends Component {
  state = {
    images: [],
    queryName: '',
    loading: false,
    page: 1,
    selectImage: null,
    showBtn: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { queryName, page } = this.state;

    if (prevState.queryName !== queryName) {
      this.setState({ images: [], loading: true });

      fetchImages(queryName, 1).then(res => {
        const imagesData = res.hits;

        if (imagesData.length === 0) {
          return toast.error('Here is no images to show');
        }
        if (imagesData.length === 12) {
          return this.setState({
            images: imagesData,
            loading: false,
            showBtn: true,
          });
        }
        if (imagesData.length < 12) {
          return this.setState({
            images: imagesData,
            loading: false,
            showBtn: false,
          });
        }
      });
    }

    if (prevState.page !== page) {
      if (page !== 1) {
        this.setState({ loading: true });
        fetchImages(queryName, page)
          .then(res => {
            const imagesData = res.hits;
            if (imagesData.length < 12) {
              this.setState({ showBtn: false });
            }
            this.setState({
              images: [...prevState.images, ...imagesData],
              loading: false,
            });
          })
          .finally(this.scroll);
      }
    }
  }

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  getQueryValue = name => {
    this.setState({ queryName: name });
  };

  resetPage() {
    this.setState({ images: [], page: 1 });
  }

  // clickMoreBtn = () => {
  //   this.setState(prevState => ({ page: prevState + 1 }));
  // };

  clickMoreBtn = page => {
    this.setState(p => ({ page: p.page + 1 }));
  };

  closeModal = () => {
    this.setState({ selectImage: null });
  };

  handleSelectImg = image => {
    this.setState({ selectImage: image });
  };

  render() {
    const { loading, images, selectImage, queryName } = this.state;
    const { clickMoreBtn, getQueryValue, handleSelectImg } = this;
    const showBtn = images.length >= 1;

    return (
      <>
        <Searchbar onSubmit={getQueryValue}></Searchbar>

        {loading && <Spinner />}

        <ImageGallery images={images} selectImg={handleSelectImg} />

        {/* {images.length > 0 && !loading && <LoadMoreButton onClick={clickMoreBtn} />} */}

        {showBtn && <LoadMoreButton onClick={clickMoreBtn} />}

        {selectImage && (
          <Modal onClose={this.closeModal}>
            <img src={selectImage} alt={queryName} />
          </Modal>
        )}

        <ToastContainer />
      </>
    );
  }
}

export default App;
