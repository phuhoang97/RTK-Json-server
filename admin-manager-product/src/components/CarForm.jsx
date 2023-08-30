import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCar, updateCar } from "../redux/carsSlice";

const CarForm = ({ selectedCar }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", manufacturer: "" });

  useEffect(() => {
    if (selectedCar) {
      setFormData({
        name: selectedCar.name || "",
        manufacturer: selectedCar.manufacturer || "",
      });
    }
  }, [selectedCar]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCar) {
      // Thực hiện cập nhật
      dispatch(updateCar({ ...selectedCar, ...formData }));
    } else {
      // Thực hiện thêm mới
      dispatch(createCar(formData));
    }
    setFormData({ name: "", manufacturer: "" });
  };

  return (
    <div>
      <h2>{selectedCar ? "Edit Car" : "Add Car"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Manufacturer:</label>
          <input
            type='text'
            name='manufacturer'
            value={formData.manufacturer}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
