import { useState } from "react";
import {
  MdOutlineBatteryStd,
  MdOutlineClose,
  MdOutlineNetworkCell,
  MdOutlineSearch,
  MdOutlineShare,
  MdOutlineSignalWifiStatusbar4Bar,
} from "react-icons/md";

export default function HeaderAction({ handleSearch }) {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchClick = () => {
    setIsSearchClick(true);
  };
  const handleSearchClose = () => {
    setSearch("");
    setIsSearchClick(false);
    handleSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className="shadow">
      <div className="flex justify-end items-center gap-[2px] text-[#666666] pr-1">
        <MdOutlineSignalWifiStatusbar4Bar />
        <MdOutlineNetworkCell />
        <MdOutlineBatteryStd />
        <span>11:11</span>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          {!isSearchClick && (
            <span className="text-lg roboto-medium text-[#262626]">
              Real Food Store
            </span>
          )}
          {isSearchClick && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-2xl text-[#666666]"
                onClick={handleSearchClose}
              >
                <MdOutlineClose />
              </button>

              <input
                type="text"
                autoFocus
                className="outline-none"
                value={search}
                onChange={handleChange}
                placeholder="Search by title"
              />
            </div>
          )}
        </div>

        <div className="flex gap-1">
          {!isSearchClick && (
            <button
              type="button"
              className="text-2xl text-[#666666]"
              onClick={handleSearchClick}
            >
              <MdOutlineSearch />
            </button>
          )}
          <button type="button" className="text-2xl text-[#666666]">
            <MdOutlineShare />
          </button>
        </div>
      </div>
    </div>
  );
}
