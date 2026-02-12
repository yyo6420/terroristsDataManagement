import "./FilterSection.css";

function FilterSection({ filterName, filter }) {
  return (
    <div className="FilterSection">
      <input
        type="text"
        className="filterButtons"
        value={filterName}
        onChange={(e) => filter(e.target.value)}
      />
      <button className="filterButtons">חיפוש לפי מספר תקיפות</button>
      <button className="filterButtons mostDanger">הטרוריסט הכי מסוכן</button>
      <select className="filterButtons" id="selectByBox">
        <option value="selsctBy">סדר לפי</option>
        <option value="selsctBy">כולם</option>
        <option value="selsctBy">שם</option>
        <option value="selsctBy">מספר תקיפות</option>
        <option value="selsctBy">אירגון</option>
      </select>
    </div>
  );
}

export default FilterSection;
