import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slise";
import { DocumentTitle } from "../../hooks/index";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  return (
    <div className={styles.searchBox}>
      <DocumentTitle>SearchBox</DocumentTitle>
      <label htmlFor="names" className={styles.inputLabel}>
        Contact search
      </label>
      <input
        className={styles.inputSearch}
        id="names"
        name="name"
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter a name"
        value={nameFilter}
        spellCheck="true"
      />
    </div>
  );
};

export default SearchBox;
