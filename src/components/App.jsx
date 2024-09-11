import { useEffect, useState } from "react";
import { fetchImages } from "../api/api";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState({
    src: "",
    descr: "",
  });

  const newSearch = (value) => {
    setSearchQuery(value);
    setPage(1);
    setSearchData([]);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        if (page === 1) {
          setSearchData(data);
        } else {
          setSearchData((prevData) => [...prevData, ...data]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handlePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (src, descr) => {
    setImage({ src, descr });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setImage({ src: "", descr: "" });
  };

  return (
    <div>
      <SearchBar onSubmit={newSearch} />
      {error && <ErrorMessage />}
      {searchQuery && (
        <ImageGallery images={searchData} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {searchData.length > 0 && <LoadMoreBtn handlePage={handlePage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={image.descr}
        image={image.src}
      />
    </div>
  );
};

export default App;
