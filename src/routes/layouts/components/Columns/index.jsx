import { useState } from 'react'
import Icon from "./icons";
import CirclePurple from "./CirclePurple";
import { PencilIcon, TrashIcon } from "../../../../resources/icon";
import Modal from "../../../../components/Modal";
import { useToastContext } from '../../../../context/ToastContext';
import { makeRequest } from '../../../../helpers';
import { TextField } from '@mui/material';

export default function Column ({ id, name, type, getColumns, item, layout_id }) {
  // TODO: Inputs
  const [layout_key, setLayoutKey] = useState(layout_id) // eslint-disable-line
  const [column_key, setColumnKey] = useState()
  const [column_name, setName] = useState(name)
  const [column_type, setType] = useState(type)
  const [unique, setUnique] = useState()
  const [required, setRequired] = useState()
  const [private_field, setPrivate] = useState()
  const [minimum_length, setMinimumLength] = useState()
  const [max_length, setMaxLength] = useState()
  //* State for the column
  const [column, setColumn] = useState()
  const [modalstate, setModalDelete] = useState()
  const [modalConfig, setStateModalConfig] = useState(false)
  const addToast = useToastContext()
  const classOfButton = 'text-[#2C2C2C] hover:bg-color-primary hover:text-white hover:rounded-md hover:border-[#CBCBCB] h-[30px] w-[30px] flex justify-center items-center'

  const handlerChange = async (item) => {
    const { data: {message, status} } = await makeRequest('schema/column/info', 'POST', {
      'column_key': item.column_key
    })
    if (status) {
      console.log(message)
      setStateModalConfig(true)
      setColumnKey(item.column_key)
      setName(message.name)
      setType(message.type)
      setUnique(message.settings.unique)
      setPrivate(message.settings.private)
      setRequired(message.settings.required)
      setMinimumLength(message.settings.minimum_length)
      setMaxLength(message.settings.maximum_length)
    }
  }

  const update = async (e) => {
    e.preventDefault()
    const new_field = {
      layout_key: layout_key,
      column_key: column_key,
      name: column_name,
      type: column_type,
      settings: {
        private_field: private_field,
        unique: unique,
        required: required,
        maximum_length: max_length,
        minimum_length: minimum_length
      }
    }

    const { data: {message, status} } = await makeRequest('schema/column/edit', 'PUT', new_field)
    if (status) setStateModalConfig(false)
    addToast(message, status)
  }

  const handlerDelete = ( id ) => {
    setModalDelete(true)
    setColumn(id)
  }

  const deleteColumn = async () => {
    console.log(column)
    const { data: {message, status}} = await makeRequest('schema/column/delete', 'DELETE', {
      'column_key': column
    })
    if (status) getColumns()
    addToast(message, status)
    setModalDelete(false)
  }

  return <div className="w-full my-2 grid grid-cols-5 bg-[#F8F8F8] p-1 border border-gray shadow-sm shadow-gray2 rounded-sm">
    <div className="w-full col-span-2 flex items-center justify-start gap-1">
      <CirclePurple>
        <Icon type={type} />
      </CirclePurple>
      <p className="font-base text-md pl-2">{name}</p>
    </div>
    <div className="w-full col-span-2 flex items-center justify-start gap-2">
      <p className="font-normal text-md pl-2 capitalize">{type}</p>
    </div>
    <div className="w-full flex items-center justify-start gap-8">
      <button onClick={() => handlerChange(item)} className={classOfButton}>
        <PencilIcon/>
      </button>
      <button onClick={() => handlerDelete(id)} className={classOfButton}>
        <TrashIcon />
      </button>
    </div>
    <Modal
      title={`Edit of ${type}`}
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
                value={column_name}
                onChange={(event) => setName(event.target.value)}
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
                  value={minimum_length}
                  onChange={(event) => setMinimumLength(event.target.value)}
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
                  value={max_length}
                  onChange={(event) => setMaxLength(event.target.value)}
                />
              </div>
            </div>
            
            <div className="w-full flex h-auto">
              <div className="w-1/5 flex justify-center items-center">
                <input type="checkbox" id="required"  className="w-[20px] h-[20px] accent-color-primary text-gray rounded-5xl focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray"
                checked={required} 
                value={required}
                onChange={(event) => setRequired(event.target.checked)}
                />
              </div>
              <div className="w-4/5 flex flex-col items-center justify-start gap-1 text-left">
                <p className="text-left w-full capitalize text-md">Required field</p>
                <p className="text-left w-full text-xs">You won't be able to create an entry if this field is empty</p>
              </div>
            </div>

            <div className="w-full flex h-auto">
              <div className="w-1/5 flex justify-center items-center">
                <input type="checkbox" id="private_field"  className="w-[20px] h-[20px] accent-color-primary text-gray rounded-5xl focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray" 
                checked={private_field}
                value={private_field}
                onChange={(event) => setPrivate(event.target.checked)}
                />
              </div>
              <div className="w-4/5 flex flex-col items-center justify-start gap-1 text-left">
                <p className="text-left w-full capitalize text-md">Private field</p>
                <p className="text-left w-full text-xs">This field will not show up in the API response </p>
              </div>
            </div>

            <div className="w-full flex h-auto">
              <div className="w-1/5 flex justify-center items-center">
                <input type="checkbox" id="unique"  className="w-[20px] h-[20px] accent-color-primary text-gray rounded-5xl focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray focus:ring-2 dark:bg-gray dark:border-gray"
                  checked={unique}
                  value={unique}
                  onChange={(event) => setUnique(event.target.checked)}
                />
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
          <button className="px-2.5 py-1.5 rounded-full bg-color-primary text-white w-auto flex items-center justify-center"
            onClick={update}
          >
            Edit field
          </button>
        </div>
      </form>
    </Modal>

    <Modal
      title={null}
      stateModal={modalstate}
      changeStateModal={setModalDelete}
    >
      <div className='w-full flex flex-col justify-center items-center h-auto'>
        <code>Do you want to <code className='text-[#f10000]'>delete</code> this column?</code>
        <div className='w-full flex items-center justify-around p-2'>
          <button onClick={() => deleteColumn()} className="px-3 py-1 rounded-full text-color-primary w-[150px]">
            Yes, delete
          </button>
          <button onClick={() => setModalDelete(false)} className='px-3 py-1 rounded-full bg-color-primary text-white w-[150px]'>
            Don't, delete
          </button>
        </div>
      </div>
    </Modal>
  </div>
}