import React, { useState, useContext, useEffect, useRef } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


import { UserIcon, PasswordIcon, EmailIcon } from "../../resources/icon"; 
// import nameLogo from "../../resources/icons/dashboard/nameLogo.svg";
// import passwordLogo from "../../resources/icons/dashboard/passwordLogo.svg";
// import emailLogo from "../../resources/icons/dashboard/emailLogo.svg";
// import companyLogo from "../../resources/icons/dashboard/companyLogo.svg";

import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import {UserMachineContext} from './userStateMachine.js'
import TagContext from "./TagContext";
import TagChip from "./TagChip";

const Form = () => { 
  const [employee, setEmployee] = useState("");
  const [rol, setRol] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    company: "",
  });
  const {machine, validation} = useContext(UserMachineContext)
  const [state] = machine
  const { removeTag, getTagsAdded, addedTags } = useContext(TagContext)

  const isMounted = useRef(false);
  useEffect(() => {
      if (!isMounted.current) {
          isMounted.current = true
          getTagsAdded()
      }
  }, [getTagsAdded])

  const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setFormValues({
      ...formValues,
      showConfirmPassword: !formValues.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmployeeChange = (event) => {
    setEmployee(event.target.value);
    localStorage.setItem("Employee", event.target.value)
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
    localStorage.setItem("Rol", event.target.value)
  };

  const handleValueAsing = (key) => {
    if (!state.matches('newUser')) {
      return false
    }
    if (localStorage.getItem(key) === '' || localStorage.getItem(key) === undefined || localStorage.getItem(key) === null) {
      return false
    }
    return true
  }

  const generateForm = () => {
    let simulatedData = [
      "Jose juan",
      "Rodrigo",
      "Luis",
      "Maximiliano",
      "Carlos",
    ];
    let simulatedRol = ["analista", "admnistrador", "empleado", "cientifico"];
    let nameInput = (
      <div className="py-[1rem]">
        <Input
          id="Name"
          error={validation.name}
          onChange={(e) => {
            localStorage.setItem("Name", e.target.value)
            setFormValues({
              ...formValues,
              name: e.target.value
            })
          }}
          value={handleValueAsing("Name") ? localStorage.getItem("Name") : formValues.name}
          startAdornment={
            <InputAdornment position="start">
              <UserIcon />
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={"Name"}
          readOnly={state.matches('viewUser')}
        />
      </div>
    )
    let lastNameInput = (
      <div className="py-[1rem]">
        <Input
          id="LastName"
          error={validation.lastName}
          onChange={(e) => {
            localStorage.setItem("LastName", e.target.value)
            setFormValues({
              ...formValues,
              lastName: e.target.value
            })
          }}
          value={handleValueAsing("LastName") ? localStorage.getItem("LastName") : formValues.lastName}
          startAdornment={
            <InputAdornment position="start">
              <UserIcon />
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={"Last name"}
          readOnly={state.matches('viewUser')}
        />
      </div>
    )
    let emailInput = (
      <div className="py-[1rem]">
        <Input
          id="Email"
          error={validation.email}
          onChange={(e) => {
            localStorage.setItem("Email", e.target.value)
            setFormValues({
              ...formValues,
              email: e.target.value
            })
          }}
          value={handleValueAsing("Email") ? localStorage.getItem("Email") : formValues.email}
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={'Email'}
          readOnly={state.matches('viewUser')}
        />
      </div>
    )
    let confirmEmail = (
      <div className="py-[1rem]">
        <Input
          id="ConfirmEmail"
          error={validation.confirmEmail}
          onChange={(e) => {
            localStorage.setItem("ConfirmEmail", e.target.value)
            setFormValues({
              ...formValues,
              confirmEmail: e.target.value
            })
          }}
          value={handleValueAsing("ConfirmEmail") ? localStorage.getItem("ConfirmEmail") : formValues.confirmEmail}
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={'Confirm email'}
          readOnly={state.matches('viewUser')}
        />
      </div>
    )
    let passwordInput = (
      <div className="py-[1rem]">
        <Input
          id="password"
          error={validation.password}
          onChange={(e) => {
            localStorage.setItem("Password", e.target.value)
            setFormValues({
              ...formValues,
              password: e.target.value
            })
          }}
          value={handleValueAsing("Password") ? localStorage.getItem("Password") : formValues.password}
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={"Password"}
          type={formValues.showPassword ? "text" : "password"}
          readOnly={state.matches('viewUser')}
        />
      </div>
    );

    let confirmPasswordInput = (
      <div className="py-[1rem]">
        <Input
          id="confirmPassword"
          error={validation.confirmPassword}
          onChange={(e) => {
            localStorage.setItem("ConfirmPassword", e.target.value)
            setFormValues({
              ...formValues,
              confirmPassword: e.target.value
            })
          }}
          value={handleValueAsing("ConfirmPassword") ? localStorage.getItem("ConfirmPassword") : formValues.confirmPassword}
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {formValues.showConfirmPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={"Confirm password"}
          type={formValues.showConfirmPassword ? "text" : "password"}
          readOnly={state.matches('viewUser')}
        />
      </div>
    );

    let companyInput = (
      <div className="py-[1rem]">
        <Input
          id="Company"
          error={validation.company}
          onChange={(e) => {
            localStorage.setItem("Company", e.target.value)
            setFormValues({
              ...formValues,
              company: e.target.value
            })
          }}
          value={handleValueAsing("Company") ? localStorage.getItem("Company") : formValues.company}
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={'Company'}
          readOnly={state.matches('viewUser')}
        />
      </div>
    )

    let employeesItems = simulatedData.map((employee, index) => {
      return (
        <MenuItem key={index} value={employee}>
          {employee}
        </MenuItem>
      );
    });

    let rolItems = simulatedRol.map((rol, index) => {
      return (
        <MenuItem key={index} value={rol}>
          {rol}
        </MenuItem>
      );
    });

    let employeesInput = (
      <div className="py-[1rem]">
        <FormControl fullWidth={true}>
          <InputLabel id="employeesLabelID">Employees</InputLabel>
          <Select
            labelId="employeesLabelID"
            id="employeesID"
            label="employees"
            value={handleValueAsing("Employee") ? localStorage.getItem("Employee") : employee}
            onChange={handleEmployeeChange}
            readOnly={state.matches('viewUser')}
          >
            {employeesItems}
          </Select>
        </FormControl>
      </div>
    );
    let rolesInput = (
      <div className="py-[1rem]">
        <FormControl fullWidth={true}>
          <InputLabel id="rolSelectorLabelID">Select Rol</InputLabel>
          <Select
            labelId="rolSelectorLabelID"
            id="rolSelectorID"
            label="Select Rol"
            value={handleValueAsing("Rol") ? localStorage.getItem("Rol") : rol}
            onChange={handleRolChange}
            readOnly={state.matches('viewUser')}
          >
            {rolItems}
          </Select>
        </FormControl>
      </div>
    );
    return (
      <>
        {nameInput}
        {lastNameInput}
        {emailInput}
        {confirmEmail}
        {passwordInput}
        {confirmPasswordInput}
        {companyInput}
        {employeesInput}
        {rolesInput}
      </>
    );
  };

  return (
    <div className="flex-1 flex-col" style={{marginLeft: '35px'}}>
      {generateForm()}
      <div>
        <h1 className="font-eigrantch-mono" style={{fontSize: '20px'}}>
          Tags
        </h1>
        <div style={{display: 'flex', marginTop: '25px', flexWrap: 'wrap'}}>
          {addedTags.map((tag, index) => {
            return <TagChip 
            key={index}
            title={tag}
            removeTag={removeTag}
            readOnly={state.matches('viewUser')}
            />
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
