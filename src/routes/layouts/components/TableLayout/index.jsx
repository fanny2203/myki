import RowsLayout from './RowsLayout'

export default function TableLayout () {
 

  return <div className="w-full rounded-md shadow-md border-[0.5px] border-[#BBCBBC] p-3">
    {/* <div className="w-full flex items-center justify-between "> */}
    <div className='grid grid-cols-4 gap-2 justify-center'>
      <div className="w-full py-4 px-1 font-semibold cursor-pointer">
        Name        
      </div> 
      <div className="w-full py-4 px-1 font-semibold col-span-2">
        Description     
      </div>
      <div className="w-full py-4 px-1 font-semibold">
        Actions        
      </div>
    </div>
    <hr className="border-[0.5px] border-gray2" />
    <RowsLayout />
  </div>
}   