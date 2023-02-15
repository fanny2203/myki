import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Notifications Toast
import { useToastContext } from "../../context/ToastContext";

//sections
import HeaderPermissions from "./sections/HeaderPermissions";
import ActionsRoles from "./sections/ActionsRoles";

//Icons
import { PencilIcon, DeleteIcon, EyeIcon } from "../../resources/icon";

//Globals
import { useDispatch } from "react-redux";

//Helpers
import { makeRequest } from "../../helpers";

//Actions
import { setIsLoading } from "../../features/Loader";

//Components
import ConfirmDelete from "../../components/Modals/ConfirmDelete";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [roleSelected, setRoleSelected] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToast = useToastContext();

  useEffect(() => {
    getRole();
  }, []);

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const getRole = async () => {
    toggleLoader(true);
    try {
      const result = await makeRequest("rol/list", "GET");
      setRoles(result.data.data);
    } catch (error) {}
    toggleLoader(false);
  };

  const deleteRole = async (data) => {
    const keyRole = data.id.split("/")[1];
    toggleLoader(true);
    try {
      const result = await makeRequest("rol/delete", "DELETE", {
        rol_key: keyRole,
      });
      addToast(result.data.message, true);
      updateRoles(data);
    } catch (error) {}
    toggleLoader(false);
  };

  const handleNavigate = (to, role) => {
    navigate(to, { state: role });
  };

  const closeModalRoleDelete = () => {
    setRoleSelected(null);
  };

  const updateRoles = (data) => {
    const newRoles = roles.filter((role) => role.id !== data.id);
    setRoles(newRoles);
  };

  return (
    <div className="h-[100%] p-[20px]">
      <HeaderPermissions title="Roles">
        <ActionsRoles />
      </HeaderPermissions>
      <div className="flex justify-between mt-[20px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className="font-bold">Role</p>
                </TableCell>
                <TableCell align="left">
                  <p className="font-bold">Asing users</p>
                </TableCell>
                <TableCell align="start">
                  <p className="font-bold">Actions</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roles.map((role, index) => (
                <TableRow
                  key={role.name + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <ConfirmDelete
                    showModal={roleSelected === role.id}
                    closeModal={closeModalRoleDelete}
                    action={deleteRole}
                    title="¿Are you sure to delete this role?"
                    data={role}
                  />
                  <TableCell align="left">{role.name}</TableCell>
                  <TableCell align="left">{role.Count}</TableCell>
                  <TableCell align="right">
                    <div className="flex justify-start">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleNavigate("viewrole", role)}
                      >
                        <EyeIcon />
                      </div>
                      {role.name !== "Super Administrador (PLATAFORMA)" && (
                        <>
                          <div
                            className="ml-[15px] mr-[15px] cursor-pointer"
                            onClick={() => handleNavigate("editrole", role)}
                          >
                            <PencilIcon />
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => setRoleSelected(role.id)}
                          >
                            <DeleteIcon />
                          </div>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div></div>
    </div>
  );
};

export default Roles;
