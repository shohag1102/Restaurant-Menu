
const Buttons = ({ categories, filterItems }) => {
  return (
    <div className="buttons">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;