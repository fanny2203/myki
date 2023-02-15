import { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return { handleChange, formData };
};

export default useForm;
