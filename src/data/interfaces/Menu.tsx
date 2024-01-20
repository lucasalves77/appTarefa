import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddPage from "./AddPage";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "./switch.css"

function Menu() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className=" h-100 px-4 bg-bgMenu w-60 relative ">
      <h1 className="text-textWhite">texto</h1>
      <div className='relative flex items-center'>
        <input className='text-sm text-textWhite relative bg-bgInput pl-10 py-2 w-full outline-none rounded' type="text" placeholder='Procurar' />
        <SearchIcon style={{fontSize: 20}} className='text-textWhite left-0 ml-2 absolute'/>
      </div>
      <div onClick={() => handleButtonClick(1)} className={`${selectedButton === 1 ? 'bg-bgButton' : ''} select-none mt-2 cursor-pointer flex items-center py-2 rounded`} >
        <StarBorderIcon style={{fontSize: 20}} className='ml-2 text-textWhite'/>
        <button className='text-sm pl-2 text-textWhite'>Favorites</button>
      </div>
      <div onClick={() => handleButtonClick(2)} className={`${selectedButton === 2 ? 'bg-bgButton' : ''} select-none mt-2 cursor-pointer flex items-center py-2 rounded`} >
        <DeleteOutlineIcon style={{fontSize: 20}} className='ml-2 text-textWhite'/>
        <button className='text-sm pl-2 text-textWhite'>Recently deleted</button>
      </div>
        <AddPage/>
      <div className="mb-4 flex items-center justify-between right-0 absolute bottom-0 w-full">
        <button >
          <SettingsOutlinedIcon style={{fontSize: 20}} className='ml-4 text-textWhite'/>
        </button>
        <div className="toggle-switch">
          <label className="switch-label">
            <input placeholder='1' type="checkbox" className="checkbox"></input>
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Menu;
