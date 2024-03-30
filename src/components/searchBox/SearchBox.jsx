const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </label>
    </div>
  );
};

export default SearchBox;
