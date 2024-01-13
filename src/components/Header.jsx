import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ navVis, setNavVis }) {
  return (
    <div className="bg-[#E407C1] py-3 sm:py-5 p-2 shadow-xl z-50 sticky top-0 flex flex-row justify-between sm:h-[6.25rem]">
      <h1 className="text-white text-3xl font-light select-none sm:text-6xl">
        Jordan Wylde-Browne
      </h1>
      <button className="p-2 py-1 sm:hidden" onClick={setNavVis} title="Menu">
        <FontAwesomeIcon
          icon={navVis ? faBars : faXmark}
          className="text-slate-200 text-3xl sm:hover:text-yellow-400"
        />
      </button>
    </div>
  );
}

export default Header;
