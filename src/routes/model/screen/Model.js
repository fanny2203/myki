import { useEffect, useState } from 'react'
import { getHeaders, makeRequest } from '../../../helpers';
// Icons
import { SearchIcon, RightArrow, ProyectIcon, DBIcon } from '../../../resources/icon';
// components
import Modal from '../../../components/Modal';
import { InputAdornment, TextField } from '@mui/material';
import TutorialModel from '../components/TutorialModel';
import TableConnections from '../components/TableConnections';
import { useToastContext } from '../../../context/ToastContext';
import SideBarModalRight from '../../../components/SideBarModalRight';
import { useNavigate } from 'react-router-dom';

//Globals
import { useSelector } from "react-redux";

export default function Model() {
  const [project, setProject] = useState({
    name: '',
    description: ''
  })
  const navigate = useNavigate()
  const addToast = useToastContext()
  const [setup, setSetup] = useState(true)
  const [currentProject, setCurrentProject] = useState(null)
  const [projects, setProjects] = useState([])  // eslint-disable-line
  const [stateModal, changeStateModal] = useState(false)
  const [stateSideBar, changeStateSideBar] = useState(false)

  const { primaryColor } = useSelector((state) => state.theme.theme);

  const [connections, setConnections] = useState([]) 

  const [connectorsOut, setConnectorsOut] = useState([]) // eslint-disable-line

  const handleSideBar = () => {
    changeStateSideBar(true)

    fetch(process.env.REACT_APP_BACKEND_URL_API + "project/connectors/out", {
      method: 'Post',
      body: JSON.stringify({ project_id: currentProject }),
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(responseConnectionsOut => setConnectorsOut(responseConnectionsOut))
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL_API + 'project/list', {
      method: 'GET',
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(response => setProjects(response))
    .catch(err => console.error(err))
  }, [setProjects])

  // Make new project 
  const createProject = async (e) => {
    e.preventDefault()
    const { data: {message, status} } = await makeRequest('project/create', 'POST', project)
    if (status) changeStateModal(false)
    addToast(message, status)

    fetch(process.env.REACT_APP_BACKEND_URL_API + 'project/list', {
      method: 'GET',
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(response => setProjects(response))
    .catch(err => console.error(err))
  }
  const handleChange = ({ target: { name, value } }) => {
    setProject({ ...project, [name]: value })
  }

  // Get projects
  const getConnects = ( id ) => {
    setCurrentProject(id)
    setSetup(false)

    fetch(process.env.REACT_APP_BACKEND_URL_API + "project/object/list", {
      method: 'Post',
      body: JSON.stringify({ project_id: id }),
      headers: getHeaders()
    })
    .then(response => response.json())
    .then(responseConnections => setConnections(responseConnections))
  }

  const CardProject = ({ id, name }) => <button
    className={(currentProject === id) ? 
      'bg-color-primary text-white mx-12 p-4 py-2.5 border border-[#BCBCBC] shadow-sm shadow-[#BCBCBC] rounded-md flex items-start justify-start gap-2 w-full' : 
      `hover:bg-[${primaryColor}] text-black hover:text-white shadow-sm shadow-[#BCBCBC] rounded-md flex items-start justify-start gap-2 w-full bg-white mx-12 p-4 py-2.5 border border-[#BCBCBC]`} 
    onClick={() => getConnects(id)}
    style={{ background: currentProject === id && primaryColor }}
  >
    <ProyectIcon /> 
    {name}
  </button>

  const handleConnectTo = () => {
    navigate('../connect-to')
    changeStateSideBar(false)
  }

  const CardConnectorOut = ({ id, name }) => <button
    onClick={handleConnectTo}
    className={`hover:bg-[${primaryColor}] text-black hover:text-white shadow-sm shadow-[#BCBCBC] rounded-md flex items-start justify-start gap-2  bg-white mx-12 px-4 py-2.5 border border-[#BCBCBC]`}
  >
    {name}
    <DBIcon />
  </button>
  
  return <div className={'h-full w-full'} style={{ background: 'linear-gradient(to right, white 50%, #EBEBEB 50%)' }}>
    <div className={` grid  ${setup ? 'grid-cols-2 ' : 'grid-cols-1 '}  justify-items-center gap-4 h-full `} >
      <div className="w-full flex flex-col items-start justify-start h-full p-5">
        <div className='w-full flex items-start justify-between'>
          <p className="font-medium text-2xl font-eigrantch-mono">
            Model & Cleasing
          </p> 
          <div className="flex items-center justify-center gap-1 text-lg">
            <button className="mx-auto flex justify-center items-center gap-1 text-white bg-color-primary rounded-full px-4 py-2" style={{ background: primaryColor }}>
              <p className="font-normal text-lg">Start from Scratch </p>
              <RightArrow className="h-3 w-5 -rotate-90" alt=""/>
            </button>
          </div>
        </div>
        <div className='grid grid-cols-4 justify-items-center gap-4 w-full h-full py-10'>
          <div className={`flex flex-col items-start justify-start w-full`}>
            <div className='flex justify-start items-center gap-4 py-5'>
              <p className='font-semibold text-lg'>Project </p>
              <SearchIcon className='h-6 w-6' alt='' />
            </div>
            <div className={`flex flex-col justify-start items-center gap-2 overflow-y-scroll overflow-x-hidden h-4/5 w-full' `}>
              {projects.length > 0 ? 
                projects.map((project, index) => <CardProject
                  key={index}
                  id={project.id}
                  name={project.name}
                />) 
                  : 
                <button onClick={() => changeStateModal(!stateModal)} className={`hover:bg-[${primaryColor}] text-black hover:text-white shadow-sm shadow-[#BCBCBC] rounded-md flex items-start justify-start gap-2 w-full bg-white mx-12 p-4 py-2.5 border border-[#BCBCBC]`} >
                  <ProyectIcon /> 
                  Make a new project
                </button>
              }
            </div>
          </div>
          <TableConnections handleSideBar={handleSideBar} connections={connections} setup={setup}/>
        </div>
      </div>
      <TutorialModel setup={setup} setSetup={setSetup} />
    </div>
    {/* Modal  */}
    <Modal
      stateModal={stateModal}
      changeStateModal={changeStateModal}
    >
      <form onSubmit={createProject} className='flex flex-col items-center justify-center w-full gap-6'>
        <TextField
          type={'text'}
          name="name"
          required
          className="w-full"
          id="standard-basic" 
          variant="standard"
          placeholder="Project Name" 
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><ProyectIcon /></InputAdornment>,
          }}
        />
        <textarea
          className='w-full shadow-sm border-b '
          name='description'
          id=""
          cols="30"
          rows="5"
          onChange={handleChange}
          placeholder='Description'>
        </textarea>
        <div className='flex items-end justify-end w-full gap-2'>
          <button
            type='button'
            onClick={() => changeStateModal(!stateModal)}
            style={{ color: primaryColor }}
            className='text-color-primary w-28 h-9.5 p-2 text-md hover:bg-[#FCFCFC] rounded-xl'>
              Cancel
          </button>
          <button
            type='submit'
            style={{ background: primaryColor }}
            className="bg-color-primary rounded-full w-28 h-9.5 p-2 text-md flex items-center justify-center text-white gap-1 capitalize"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
    <SideBarModalRight
      stateModal={stateSideBar}
      changeStateSideBar={changeStateSideBar}
      title='Destination'
    >
      <div className={`flex flex-col h-full`}>
        <div className='flex justify-start items-center gap-4 py-5'>
          <p className='font-semibold text-lg'>Client </p>
          <SearchIcon className='h-6 w-6' alt='' />
        </div>
        <div className={`flex flex-col gap-2 h-4/5' `}>
          {connectorsOut.length > 0 ? 
            connectorsOut.map((project, index) => <CardConnectorOut
              key={index}
              id={project.id}
              name={project.name}
            />) 
              : 
            <button onClick={handleConnectTo} className={`hover:bg-[${primaryColor}] text-black hover:text-white shadow-sm shadow-[#BCBCBC] rounded-md flex items-start justify-start gap-2 bg-white mx-12 p-4 py-2.5 border border-[#BCBCBC]`} >
              New connector out
              <DBIcon /> 
            </button>
          }
        </div>
      </div>
      <button className='bottom-0 rounded-full shadow-sm m-1 font-normal text-white text-sm py-1.5 px-3.5 bg-color-primary' style={{ background: primaryColor }}>
        Continue to Modeling & Cleasing
      </button>
    </SideBarModalRight>
  </div>
}
