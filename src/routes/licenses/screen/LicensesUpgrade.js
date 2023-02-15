import { Link, useNavigate } from "react-router-dom";
// Icons
import { RightArrow, CloudIcon, TwoArrowsLeft } from "../../../resources/icon";

//Globals
import { useSelector } from "react-redux";

export default function LicensesStorage({ handlerPlan }) {
  const plans = [
    { name: "Free Plan", storage: "50 GB", priceId: null },
    { name: "Business", storage: "150 GB", priceId: "Business" },
    { name: "Recommended", storage: "250 GB", priceId: "Recommended" },
    { name: "Complete", storage: "8 TB", priceId: "Complete" },
  ];

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const navigate = useNavigate();

  const selectPlan = (planSelected) => {
    handlerPlan(planSelected);
    navigate("../storage");
  };

  const ButtonStripe = ({ priceId }) => (
    <button
      onClick={() => selectPlan(priceId)}
      style={{ background: priceId !== null && primaryColor }}
      className={
        priceId !== null
          ? "bg-color-primary mx-auto flex justify-center items-center gap-4 text-white rounded-full px-4 py-2"
          : "bg-[#BCBCBC] mx-auto flex justify-center items-center gap-4 text-white rounded-full px-4 py-2 "
      }
      disabled={priceId !== null ? false : true}
    >
      <p className="font-normal text-lg">
        {priceId !== null ? "Purchase" : "Acquired"}
      </p>
      <RightArrow />
    </button>
  );

  const CardPlan = ({ name, storage, priceId }) => (
    <div className="group bg-gray rounded-md flex flex-col justify-center items-center w-full p-10 hover:shadow-md hover:shadow-[#B0B0B0] gap-4">
      <h3 className="font-medium text-lg font-eigrantch-mono">{name}</h3>
      <button
        className=""
        style={{ color: primaryColor, borderColor: primaryColor }}
      >
        <CloudIcon />
        <p className="">{storage}</p>
      </button>
      <p className="text-center">
        Erat integer parturient ut eros vestibulum porttitor habitant cum ac a
        massa per.
      </p>
      <ul className="list-disc text-sm">
        <li>Erat integer.</li>
        <li>Eros vestibulum.</li>
        <li>Porttitor habitant.</li>
        <li>Parturient ut eros vestibulum er.</li>
      </ul>
      <div className="grid justify-items-center pt-10">
        <ButtonStripe priceId={priceId} />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full px-5 pt-7">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-end gap-1 text-lg w-full">
          <Link to="../storage" className="py-2 mx-4">
            <TwoArrowsLeft />
          </Link>
          <p className="py-2">Current : </p>
          <p
            className="py-2 mr-4 text-color-primary"
            style={{ color: primaryColor }}
          >
            Free Plan
          </p>
        </div>
      </div>
      <hr
        className="text-color-primary w-full text-md my-5"
        style={{ color: primaryColor }}
      />
      <div className="grid grid-cols-4 gap-4 justify-items-center my-10">
        {plans.map((plan, index) => (
          <CardPlan
            key={index}
            name={plan.name}
            storage={plan.storage}
            priceId={plan.priceId}
          />
        ))}
      </div>
    </div>
  );
}
