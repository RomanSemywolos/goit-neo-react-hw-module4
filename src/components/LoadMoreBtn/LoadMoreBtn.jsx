import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handlePage }) => {
  return (
    <div className={style.loadMoreBtn}>
      <button onClick={handlePage}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;

