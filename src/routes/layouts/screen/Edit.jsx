import HeaderLayout from "../HeaderLayout";
import { useState, useEffect, useCallback } from 'react'
import { useLocation } from "react-router-dom";
import { FieldIcon, TagsIcon } from "../../../resources/icon";
import Modal from "../../../components/Modal";
import { getHeaders, makeRequest } from "../../../helpers";
import Column from "../components/Columns";
import Icon from "../components/Columns/icons";
import { TextField } from "@mui/material";
import { useToastContext } from "../../../context/ToastContext";

export default function Edit () {
  const addToast = useToastContext()
  const navigate = useLocation()
  const [field, setField] = useState({
    layout_key: navigate.state.id,
    name: '',
    type: '',
    unique: false,
    required: false,
    private_field: false,
    minimum_length: 10,
    maximum_length: 100
  })
  const [columns, setColumns] = useState([])
  const [idLayout, setIdLayout] = useState(navigate.state.id) // eslint-disable-line
  const [modalConfig, setStateModalConfig] = useState(false)
  const [modalField, setStateModalField] = useState(false)

  //! Get columns
  const getColumns = useCallback(async () => {
    const request = await fetch(process.env.REACT_APP_BACKEND_URL_API + 'schema/column/get', {
      method: 'POST',
      body: JSON.stringify({ layout_key: idLayout }),
      headers: getHeaders()
    })
    const {message} = (await (await request).json())
    setColumns(message)
    // console.error(message, idLayout)
  }, [idLayout])
  useEffect(() => {
    getColumns()
      .catch(console.error);
  }, [getColumns])

  //! Create columns
  const createColumn = async (e) => { 
    e.preventDefault()
    
    const new_field = {
      layout_key: navigate.state.id,
      name: field.name,
      type: field.type,
      settings: {
        private_field: field.private_field,
        unique: field.unique,
        required: field.required,
        maximum_length: field.maximum_length,
        minimum_length: field.minimum_length
      }
    }
    // console.log(new_field)

    const { data: {message, status} } = await makeRequest('schema/column/create', 'POST', new_field)
    if(status){ 
      setStateModalField(false)
      setStateModalConfig(false)
      getColumns()
    }
    addToast(message, status)
  }

  const handlerField = ({ target: {id, value, checked} }) => {
    setField({ ...field, [id]: value })
    if (id === 'private_field') { 
      setField({ ...field, [id]: checked })
      return
    }
    if (id === 'unique') { 
      setField({ ...field, [id]: checked })
      return
    }
    if (id === 'required') { 
      setField({ ...field, [id]: checked })
      return
    }
    
    if (modalField !== true && modalConfig !== false) return
    setStateModalField(false)
    setStateModalConfig(true)
  }

  const ButtonSelectedInput = ({ name, content, type }) => <button onClick={() => handlerField({target : {id: 'type', value:type}})} className="w-[281px] h-[120px] bg-color-primary/5 border-color-primary border-2 rounded-sm group transition ease-in-out delay-150 cursor-pointer">
    <div className="flex justify-center items-center h-full">
      <div className="w-3/4 h-full group-hover:bg-color-primary transition ease-in-out delay-150 flex flex-col justify-around items-start p-4">
        <p className="text-color-primary group-hover:text-white font-medium transition-all">{name}</p>
        <p className="group-hover:-translate-x-2 transition ease-in-out delay-150 text-xs text-[#020202] group-hover:text-white text-left pl-2">{content}</p>
      </div>
      <div className="w-1/4 h-full flex justify-end items-center group-hover:bg-color-primary relative transition ease-in-out delay-150">
        <div className="group-hover:bg-white group-hover:flex justify-start items-center h-16 w-8 bg-indigo-500 rounded-tl-full rounded-bl-full pl-1.5 group-hover:block hidden group-hover:text-color-primary">
          <Icon type={type} />
        </div>
      </div>
    </div>
  </button>

  return <div className="w-full h-full flex flex-col">
    <HeaderLayout
      title={`Edit Layout / ${navigate.state.name} `}
      back
    >
      <button className="px-3 py-1.5 rounded-full bg-color-primary text-white w-[150px]">
        Save
      </button>
    </HeaderLayout>
    <div className="w-full h-full p-5">
      <div className="w-full flex items-center justify-between gap-2">
        <p className="font-eigrantch-mono text-lg">Fields</p>
        <div className="flex gap-2 justify-center items-center">
          <button className="flex gap-2 items-center justify-center text-color-primary bg-color-primary/5 border-2 border-color-primary rounded-full py-1 px-2.5 text-sm hover:bg-color-primary hover:text-white">
            <p>Add tags</p>
            <TagsIcon />
          </button>
          <button onClick={() => setStateModalField(true)} className="flex gap-2 items-center justify-center text-color-primary bg-color-primary/5 border-2 border-color-primary rounded-full py-1 px-2.5 text-sm hover:bg-color-primary hover:text-white">
            <p>Add more fields</p>
            <FieldIcon />
          </button>
        </div>
      </div>
      <div className="w-full h-auto mt-4">
        <div className="w-full grid grid-cols-5">
          <div className="w-full col-span-2 flex items-start justify-start gap-2">
            <p className="font-semibold pl-2">Name</p>
          </div>
          <div className="w-full col-span-2 flex items-start justify-start gap-2">
            <p className="font-semibold pl-2">Type</p>
          </div>
          <div className="w-full flex items-start justify-start gap-2">
            <p className="font-semibold pl-2">Action</p>
          </div>
        </div>
        {columns.map((item, index) => <Column getColumns={getColumns} layout_id={field.layout_key} item={item} key={index} id={item.column_key} name={item.column_name} type={item.column_type} />)}
      </div>

    </div>
    {/* //! Modal of field config  */}
    <Modal
      title={`Config of ${field.type}`}
      stateModal={modalConfig} 
      changeStateModal={setStateModalConfig}
      width='w-[700px]'
    >
      <form className="w-full h-auto">
        <div className="w-full flex justify-center items-center mb-4">
          <div className="w-1/5 flex justify-start items-center">
            <p>Name</p>
          </div>
          <div className="w-4/5">
            <div className="flex gap-6 flex-col w-full">
              <TextField
                required
                label="Name"
                type={"text"}
                id="name"
                className="w-full border-b-color-primary border-b-[0.5px]"
                variant="standard" 
                placeholder="Title"  
                onChange={handlerField}
              />
              <p className="text-xs font-base text-[#2c2c2c]">No space is allowed for the name of attribute</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <p className="w-full text-md text-[#2c2c2c] font-base py-5"> 
            Settings
          </p>
          <div className="grid grid-cols-2 gap-4">
            
            <div className="w-full flex h-auto">
              <div className="w-full flex flex-col items-center justify-start gap-1 text-left">
                <TextField 
                  required
                  label="Minimum length"
                  type={"number"}
                  id="minimum_length"
                  className="w-full border-b-color-primary border-b-[0.5px]"
                  variant="standard" 
                  placeholder="0"  
                  onChange={handlerField}
                />
              </div>
            </div>

            <div className="w-full flex h-auto">
              <div className="w-full flex flex-col items-center justify-start gap-1 text-left">
                <TextField 
                  required
                  label="Maximum length"
                  type={"number"}
                  id="maximum_length"
                  className="w-full border-b-color-primary border-b-[0.5px]"
                  variant="standard" 
                  placeholder="0"  
                  onChange={handlerField}
                />
              </div>
            </div>
            
            <div className="w-full flex h-auto">
              <div className="w-1/5 flex justify-center items-center">
                <input type="checkbox" id="required" onChange={handlerField} className="w-[20px] h-[20px] accent-color-primary text-gray rounded-5xl focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray" />
              </div>
              <div className="w-4/5 flex flex-col items-center justify-start gap-1 text-left">
                <p className="text-left w-full capitalize text-md">Required field</p>
                <p className="text-left w-full text-xs">You won't be able to create an entry if this field is empty</p>
              </div>
            </div>

            <div className="w-full flex h-auto">
              <div className="w-1/5 flex justify-center items-center">
                <input type="checkbox" id="private_field" onChange={handlerField} className="w-[20px] h-[20px] accent-color-primary text-gray rounded-5xl focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray" />
              </div>
              <div className="w-4/5 flex flex-col items-center justify-start gap-1 text-left">
                <p className="text-left w-full capitalize text-md">Private field</p>
                <p className="text-left w-full text-xs">This field will not show up in the API response </p>
              </div>
            </div>

            <div className="w-full flex h-auto">
              <div className="w-1/5 flex justify-center items-center">
                <input type="checkbox" id="unique" onChange={handlerField} className="w-[20px] h-[20px] accent-color-primary text-gray rounded-5xl focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray" />
              </div>
              <div className="w-4/5 flex flex-col items-center justify-start gap-1 text-left">
                <p className="text-left w-full capitalize text-md">Unique field</p>
                <p className="text-left w-full text-xs">You won't be able to create an entry if there is an existing entry with identical content</p>
              </div>
            </div>
          
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2">
          <button onClick={() => setStateModalConfig(false)} className="text-color-primary">
            Cancel
          </button>
          <button className="px-2.5 py-1.5 rounded-full bg-color-primary text-white w-auto flex items-center justify-center" onClick={createColumn}>
            Add field
          </button>
        </div>
      </form>
    </Modal>

    {/* //! Modal of types fields  */}
    <Modal
      title='Add field'
      stateModal={modalField}
      changeStateModal={setStateModalField}
      width='w-auto'
    >
      <div className="w-full grid grid-cols-3 gap-2 ">
        <ButtonSelectedInput
          name='Text'
          content='Small or long text like title or description'
          type='text'
        />

        <ButtonSelectedInput
          name='Email'
          content='Email field with validations format'
          type='email'
        />

        <ButtonSelectedInput
          name='Password'
          content='Password field with encryption'
          type='password'
        />

        <ButtonSelectedInput
          name='Date'
          content='A date picker with hours, minutes & seconds'
          type='date'
        />

        <ButtonSelectedInput
          name='Boolean'
          content='Yes or no, 1 or 0 , true or false'
          type='boolean'
        />

        <ButtonSelectedInput
          name='Number'
          content='Numbers (integer, decimal)'
          type='number'
        />
      </div>
    </Modal>

  </div>
}