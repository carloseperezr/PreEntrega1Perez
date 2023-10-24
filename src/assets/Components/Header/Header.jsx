import { ShopIcon } from "./ShopIcon/ShopIcon";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <header className="flex place-content-between p-3">
      <ShopIcon />
      <NavBar />
    </header>
  );
};
