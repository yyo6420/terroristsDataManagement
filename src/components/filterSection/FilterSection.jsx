import "./FilterSection.css";

const filterBy = () => {

}


function FilterSection() {
  return (
    <div className="FilterSection">
      <input type="text" className="filterButtons" />
      <button className="filterButtons">חיפוש לפי מספר תקיפות</button>
      <button className="filterButtons mostDanger">הטרוריסט הכי מסוכן</button>
      <select className="filterButtons" id="selectByBox" onChange>
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
