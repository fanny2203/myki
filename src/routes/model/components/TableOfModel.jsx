import ColumnOfModel from "./ColumnsOfModel";

export default function TableOfModel({
  table,
  config = true,
  format = true,
  check = true,
}) {
  console.log(table);
  return (
    <div className="scroll flex items-start justify-start w-full h-full overflow-x-auto">
      {table.map((column, index) => (
        <ColumnOfModel
          key={index}
          name={column.name}
          items={column.items}
          config={config}
          format={format}
          check={check}
        />
      ))}
    </div>
  );
}
