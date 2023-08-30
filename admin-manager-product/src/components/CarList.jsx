import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars, deleteCar } from "../redux/carsSlice";
import CarForm from "./CarForm";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDeleteClick = (id) => {
    dispatch(deleteCar(id));
  };

  const handleEditClick = (car) => {
    setSelectedCar(car); // Lưu thông tin xe được chọn
  };

  return (
    <div>
      <h2>Car List</h2>
      <table>
        <thead>{/* ... */}</thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} onClick={() => handleEditClick(car)}>
              {" "}
              {/* Xử lý sự kiện khi nhấp vào hàng */}
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteClick(car.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CarForm selectedCar={selectedCar} />{" "}
      {/* Truyền dữ liệu xe vào CarForm */}
    </div>
  );
};

export default CarList;
