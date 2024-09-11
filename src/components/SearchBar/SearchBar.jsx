import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.searchInput.value;

    if (value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(value);
    form.reset();
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          className={style.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
