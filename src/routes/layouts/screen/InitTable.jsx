import HeaderLayout from "../HeaderLayout";
import { useNavigate } from "react-router-dom";
import TableLayout from "../components/TableLayout";
import Modal from "../../../components/Modal";
import { useState } from "react";
import { makeRequest } from "../../../helpers";
import { useToastContext } from "../../../context/ToastContext";
import { TextField } from "@mui/material";

//Globals
import { useSelector } from "react-redux";

export default function InitTable () {
  const [layout, setLayout] = useState({
    name: '',
    description: ''
  })
  const [modal, setStateModal] = useState(false)
  const addToast = useToastContext()
  const navigate = useNavigate()

  const handlerLayout = ({ target: {id, value}}) =>
    setLayout({ ...layout, [id]: value})

  const createLayout = async (e) => {
    e.preventDefault()
    const { data: {message, status} } = await makeRequest('schemas/create', 'POST', layout)
    if (status !== true) {
      addToast(message, status)
      return
    }
    addToast('Layout created successfully', true)
    navigate('edit', {
      state: {
        name: layout.name,
        id: message
      }
    })
  }

  return <div className="w-full h-full flex flex-col">
    <HeaderLayout
      title='Layouts'
      back={false}
    >
      <button onClick={() => setStateModal(true)} className="px-3 py-1.5 rounded-full bg-color-primary text-white w-[150px] flex items-center justify-center">
        Create a new
      </button>
    </HeaderLayout>
    <div className="w-full p-5">
      <TableLayout />
    </div>
    <Modal
      stateModal={modal}
      changeStateModal={setStateModal}
      title='new layout'
    >
      <form className="flex gap-6 flex-col w-full">
        <TextField
          required
          label="Name"
          type={"text"}
          id="name"
          className="w-full border-b-color-primary border-b-[0.5px]"
          variant="standard" 
          placeholder="Name"  
          onChange={handlerLayout}
        />
        <textarea rows={10} id='description' type="text" onChange={handlerLayout} className="w-full border-b-color-primary border-b-[0.5px]" placeholder="Description" required >


        </textarea>
        <div className="flex justify-end items-center gap-2">
          <button type="button" onClick={() => setStateModal(false)} className="w-1/5 h-8 text-color-primary">
            Close
          </button>
          <button onClick={createLayout} className="w-1/5 h-8 bg-color-primary text-white rounded-lg">
            Create
          </button>
        </div>
      </form>

    </Modal>
  </div>
}