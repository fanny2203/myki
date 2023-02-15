import { Routes, Route } from "react-router-dom";
import ConnectByMongo from "./ConnectByMongo";
import ConnectByDrive from "./ConnectByDrive";
import Connect from "./Connect";
import Verification from "./Verification";
import Pulpit from "./Pulpit";

export default function MenuConnection() {
  return (
    <Routes>
      <Route path="/" element={<Connect />} />
      <Route path="verification" element={<Verification />} />
      <Route path="pulpit" element={<Pulpit />} />
      <Route path="mongo" element={<ConnectByMongo />} />
      <Route path="drive" element={<ConnectByDrive />} />
    </Routes>
  );
}
