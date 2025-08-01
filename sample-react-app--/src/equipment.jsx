function EquipmentName(props) {
  return <li>{props.equipmentName}</li>;
}

function EquipmentList(props) {
  return (
    <ul>
      {props.EquipmentNames.map((equipment) => {
        return equipment.startsWith('b') && <EquipmentName key={equipment} equipmentName={equipment} />
      })}
    </ul>
  );
}

function Equipments() {
  const equipmentArray = ['bat', 'ball', 'stumps'];

  return (
    <div>
      <h1>Equipments</h1>
      <EquipmentList EquipmentNames={equipmentArray} />
    </div>
  );
}

export default Equipments;
