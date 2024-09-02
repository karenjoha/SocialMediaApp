import React, { useState, useEffect } from "react";
import { BiSignal4 } from "react-icons/bi";
import { MdOutlineWifi } from "react-icons/md";
import { IoBatteryHalfOutline } from "react-icons/io5";

const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Función para obtener la hora actual y formatearla
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0'); // Formatea la hora con dos dígitos
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Formatea los minutos con dos dígitos
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Establecer la hora al montar el componente
    const intervalId = setInterval(updateTime, 60000); // Actualiza la hora cada minuto

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <div className="flex justify-between p-4 items-center">
        <h3 className="text-xl font-bold text-black-800">{time}</h3>
        <div className="flex space-x-1 text-black-600">
          <BiSignal4 className="text-2xl"/>
          <MdOutlineWifi className="text-2xl"/>
          <IoBatteryHalfOutline className="text-2xl"/>
        </div>
      </div>
      
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
