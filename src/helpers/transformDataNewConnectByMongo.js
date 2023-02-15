//Helpers

import { indexedData } from ".";

const transformData = (inputsNewConnect, isPrivate) => {
  const dataIndexed = indexedData(inputsNewConnect);
  const data = {
    conector_name: `mongo_${dataIndexed["conector_name"]}`,
    host: dataIndexed["host"],
    port: parseInt(dataIndexed["port"]),
    username: dataIndexed["username"],
    password: dataIndexed["password"],
    direction: "in",
    accessibility: isPrivate ? "private" : "public",
    connector_type_id: "ConnectorType/7528919",
  };
  return data;
};

export default transformData;
