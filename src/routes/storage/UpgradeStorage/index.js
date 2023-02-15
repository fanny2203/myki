//Sections
import SideStore from "../sections/SideStore";

//Components
import ItemUpgrade from "../../../components/ItemUpgrade";

//Globals
import { useSelector } from "react-redux";

const prices = [
  {
    name: "Free plan",
    gb: "50 GB",
    desc: "Erat integer parturient ut eros vestibulum porttitor habitant cum ac a massa per.",
    features: [
      { name: "Erat integer." },
      { name: "Eros vestibulum." },
      { name: "Porttitor habitant." },
      { name: "Parturient ut eros vestibulum er." },
    ],
    status: true,
  },
  {
    name: "Bussiness",
    gb: "150 GB",
    desc: "Erat integer parturient ut eros vestibulum porttitor habitant cum ac a massa per.",
    features: [
      { name: "Erat integer." },
      { name: "Eros vestibulum." },
      { name: "Porttitor habitant." },
      { name: "Parturient ut eros vestibulum er." },
    ],
    status: false,
  },
  {
    name: "Recommended",
    gb: "250 GB",
    desc: "Erat integer parturient ut eros vestibulum porttitor habitant cum ac a massa per.",
    features: [
      { name: "Erat integer." },
      { name: "Eros vestibulum." },
      { name: "Porttitor habitant." },
      { name: "Parturient ut eros vestibulum er." },
    ],
    status: false,
  },
  {
    name: "Complete",
    gb: "8 TB",
    desc: "Erat integer parturient ut eros vestibulum porttitor habitant cum ac a massa per.",
    features: [
      { name: "Erat integer." },
      { name: "Eros vestibulum." },
      { name: "Porttitor habitant." },
      { name: "Parturient ut eros vestibulum er." },
    ],
    status: false,
  },
];

const UpgradeStorage = () => {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="flex w-full h-full">
      <SideStore />
      <div className="flex flex-col w-full p-[20px]">
        <div className="border-b border-color-primary pb-[20px] mb-[50px]" style={{borderColor: primaryColor}}>
          <p className="text-xl text-color-primary" style={{ color: primaryColor }}>Upgrade storage</p>
        </div>
        <div className="flex justify-around w-full">
          {prices.map((price, index) => (
            <ItemUpgrade key={index + price.name} data={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpgradeStorage;
