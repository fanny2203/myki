import { useState, useEffect, useCallback } from 'react'
import { EyeIcon, PencilIcon, TagsIcon, TrashIcon } from "../../../../resources/icon"
import { useNavigate } from "react-router-dom"
import Modal from '../../../../components/Modal'
import { getHeaders, makeRequest } from '../../../../helpers'
import { useToastContext } from '../../../../context/ToastContext'

export default function RowsLayout () {
  const [rows, setRows] = useState([])
  const [idLayout, setIdLayout] = useState(null)
  const [modalDelete, setStateDelete] = useState(false)
  const classOfButton = 'text-[#2C2C2C] hover:bg-color-primary hover:text-white hover:rounded-md hover:border-[#CBCBCB] h-[30px] w-[30px] flex justify-center items-center'
  const addToast = useToastContext()
  const navigate = useNavigate()

  //! Get rows and load rows of layout
  const getRows = useCallback(async () => {
    const request = await fetch(process.env.REACT_APP_BACKEND_URL_API + 'schemas/get', {
      method: 'GET',
      headers: getHeaders()
    })
    setRows(await (await request).json())
  }, [])
  useEffect(() => {
    getRows()
      // make sure to catch any error
      .catch(console.error);
  }, [getRows])

  //! See layout
  const ButtonSee = () => <button className='text-[#2C2C2C]'>
    <EyeIcon />
  </button>
 
 //! Delete events
 const ButtonDelete = ({ id }) => <button onClick={() => handlerDelete(id)} className={classOfButton}>
    <TrashIcon />
  </button>
  const handlerDelete = ( id ) => {
    setStateDelete(true)
    setIdLayout(id)
  }
  const deleteLayout = async () => {
    const { data: {message, status}} = await makeRequest('schemas/delete', 'delete', {
      'layout_key': idLayout
    })
    if (status) getRows()
    addToast(message, status)
    setStateDelete(false)
  }

  //! Edit events
  const ButtonEdit = ( id, name ) => <button onClick={() => GoEdit(id, name)}  className={classOfButton}>
    <PencilIcon />
  </button>
  const GoEdit = ({ id, name }) => {
    navigate('edit', {
      state: {
        id: id,
        name: name
      }
    })
  }

  //! Tags
  const ButtonTag = () => <button className={classOfButton}>
    <TagsIcon />
  </button>

  return <div className="w-full flex flex-col items-center justify-center ">
    {rows.map((item, index) => <div key={index} className="w-full grid grid-cols-4 justify-center gap-2 py-2 group hover:bg-gray hover:border-l-color-primary hover:border-l-4">
      <div className="w-full md:text-md text-sm pl-1">
        <p>{item.name}</p>
      </div>
      <div className="w-full md:text-md text-sm col-span-2">
        <p>{item.description}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <ButtonTag />
        <ButtonSee />
        <ButtonEdit id={item.key} name={item.name} />
        <ButtonDelete id={item.key} />
      </div>
    </div>)}

    <Modal
      title={null}
      stateModal={modalDelete}
      changeStateModal={setStateDelete}
    >
      <div className='w-full flex flex-col justify-center items-center h-auto'>
        <code>Do you want to <code className='text-[#f10000]'>delete</code> this layout?</code>
        <div className='w-full flex items-center justify-around p-2'>
          <button onClick={() => deleteLayout()} className="px-3 py-1 rounded-full text-color-primary w-[150px]">
            Yes, delete
          </button>
          <button onClick={() => setStateDelete(false)} className='px-3 py-1 rounded-full bg-color-primary text-white w-[150px]'>
            Don't, delete
          </button>
        </div>
      </div>
    </Modal>
  </div>
}