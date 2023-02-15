import { SearchIcon } from "../../../resources/icon";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

//Globals
import { useSelector } from "react-redux";

export default function TableConnections({
  setup,
  connections,
  handleSideBar,
}) {
  const { primaryColor } = useSelector((state) => state.theme.theme);
  const [routeSelected, setRouteSelected] = useLocalStorage(
    "routeSelected",
    null
  ); // eslint-disable-line
  const goToMakeNewConnectors = () => {
    setRouteSelected(1);
    window.location?.reload();
  };

  const Tupla = ({ data, origin, connection }) => (
    <tr
      onClick={handleSideBar}
      className="flex items-start justify-between hover:border-l-4 hover:border-color-primary hover:bg-[#DCDCDC] "
      style={{borderColor: primaryColor}}
    >
      <td className="flex px-8 py-2">{data}</td>
      <td className="flex px-8 py-2">{origin}</td>
      <td className="flex px-8 py-2">{connection}</td>
    </tr>
  );

  const Arrow = () => (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.63397 0.5C2.01888 -0.166667 2.98113 -0.166667 3.36603 0.5L4.66506 2.75C5.04996 3.41667 4.56884 4.25 3.79904 4.25H1.20096C0.431161 4.25 -0.0499637 3.41667 0.334936 2.75L1.63397 0.5Z" />
    </svg>
  );

  const HEAD_TABLE = () => (
    <thead className="text-left border-b">
      <tr className="flex items-start justify-between">
        <th className="flex gap-2 px-8 py-4">
          <p>Data</p>
          <div className="flex flex-col items-center justify-center">
            <div>
              <Arrow />
            </div>
            <div className="rotate-180">
              <Arrow />
            </div>
          </div>
          <SearchIcon alt="search" className="w-5 h-5" />
        </th>
        <th className="flex gap-4 px-8 py-4">
          <p>Origin</p>
          <div className="flex flex-col items-center justify-center">
            <div>
              <Arrow />
            </div>
            <div className="rotate-180">
              <Arrow />
            </div>
          </div>
        </th>
        <th className="flex gap-4 px-8 py-4">
          <p>Connection</p>
          <div className="flex flex-col items-center justify-center">
            <div>
              <Arrow />
            </div>
            <div className="rotate-180">
              <Arrow />
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );

  if (connections.length > 0) {
    return (
      <div
        className={` ${
          !setup ? "block" : "hidden"
        } col-span-3 w-full pt-5 flex items-start justify-start `}
      >
        <table className="w-full shadow-sm shadow-[#BCBCBC] rounded-lg bg-white">
          <HEAD_TABLE />
          <tbody className="text-center">
            {connections.map((element, index) => (
              <Tupla
                key={index}
                data={element.data}
                origin={element.origin}
                connection={element.connect}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div
        className={` ${
          !setup ? "block" : "hidden"
        } col-span-3 w-full pt-5 flex items-start justify-center`}
      >
        <div className="grid">
          <p className="text-xl font-light my-1 font-eigrantch-mono">
            You have no connectors for this project
          </p>
          <button
            onClick={() => goToMakeNewConnectors()}
            className="rounded-3xl shadow-sm m-10 font-normal text-white text-md py-1.5 px-3.5 bg-color-primary"
            style={{ background: primaryColor }}
          >
            Create new connector
          </button>
        </div>
      </div>
    );
  }
}
