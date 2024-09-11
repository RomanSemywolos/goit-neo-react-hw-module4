import { Audio } from "react-loader-spinner";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}} /* Можна видалити, якщо не потрібно */
        wrapperClass={{}} /* Можна видалити, якщо не потрібно */
      />
    </div>
  );
};

export default Loader;
