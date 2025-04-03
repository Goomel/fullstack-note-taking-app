const SearchInput = () => {
  return (
    <div>
      <input
        type="text"
        className="rounded-lg border border-gray-300 text-sm lg:px-4 lg:py-3"
        placeholder="Search by title, content or tags"
      />
    </div>
  );
};

export default SearchInput;
