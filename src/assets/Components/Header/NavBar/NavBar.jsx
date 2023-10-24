import { CartWidget } from "../CartIcon/CartWidget";

export const NavBar = () => {
  return (
    <ul className="hidden sm:flex text-[16px] sm:w-[438px] sm:place-content-evenly sm:items-center">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Trending</a>
      </li>
      <li>
        <a href="#">Store</a>
      </li>
      <li>
        <a href="#">
          <CartWidget />
        </a>
      </li>
    </ul>
  );
};
