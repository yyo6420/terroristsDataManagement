import "./TeroristsData.css";
function TerirstsData({ terrorists }) {
  return (
    <table className="TeroristsDataArea">
      <tbody>
        <tr>
          <th>שם</th>
          <th>אירגון</th>
          <th>מספר תקיפות</th>
          <th>סטטוס</th>
          <th>סיכום</th>
        </tr>

        {terrorists.map((t) => (
          <tr key={t.name}>
            <th>{t.name}</th>
            <th>{t.organization}</th>
            <th>{t.attacksCount}</th>
            <th>{t.status}</th>
            <th>{t.relationToIsraelSummary}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TerirstsData;
