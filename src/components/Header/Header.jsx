import { BiSignal4 } from "react-icons/bi";
import { MdOutlineWifi } from "react-icons/md";
import { IoBatteryHalfOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-4 items-center">
        <h3 className="text-xl font-bold text-black-800">9:41</h3>
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
