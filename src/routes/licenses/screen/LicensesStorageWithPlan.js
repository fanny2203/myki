import { Link } from "react-router-dom"
import { NativeSelect } from "@mui/material"
// Icons
import { ArrowPurchase, PencilEdit } from "../Icons"
import TablePlan from "../TablePlan"

//Globals
import { useSelector } from "react-redux";

export default function LicensesStorageWithPlan ({ plan }) {

  const { primaryColor } = useSelector((state) => state.theme.theme);

  return <div className="w-full h-full px-5 pt-7">
    <div className="w-full flex items-center justify-between">
      <p className="font-medium text-2xl font-eigrantch-mono">
        Licenses
      </p>
      <div className="flex items-center justify-center gap-4 text-lg">
        <p>
          Modules: 
        </p>
        <Link
          className=" decoration-color-primary underline underline-offset-8"
          to='../storage'
        >
         Storage 
        </Link>
        <Link
          to='../connect'
        >
          Connect
        </Link>
        <Link
          to='../myc'
        > 
          M&C
        </Link>
      </div>
    </div>
    <hr className="text-color-primary w-full text-md my-5" style={{ color: primaryColor }}/>
    <div className="flex items-center justify-between gap-4 text-lg">
      <div className="flex items-center justify-center gap-3 w-1/4">
        <p>License:</p> 
        <NativeSelect
          className="w-full"
          defaultValue={plan  + ' Storage'}
          inputProps={{
            name: 'license',
            id: 'uncontrolled-native',
          }}
          >
          <option value={plan + ' Storage'}>{plan + ' Storage'}</option>
        </NativeSelect>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className='rotate-180'>
          <ArrowPurchase />
        </div>
        <ArrowPurchase />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          to='./'
          style={{ color: primaryColor }}
          className="mx-auto flex justify-center items-center gap-2 bg-white text-color-primary rounded-full px-4 py-2"
        >
          <p>
            Edit license
          </p>
          <PencilEdit />
        </Link>
        <Link to='./' className="mx-auto flex justify-center items-center gap-2 text-white bg-color-primary rounded-full px-4 py-2" style={{ background: primaryColor }}>
          <p className="font-normal text-lg">New license</p>
          <ArrowPurchase />
        </Link>
      </div>
    </div>
    <TablePlan />
  </div>
}