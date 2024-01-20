import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Header() {
  return (
    <div className='w-full h-5 flex items-center justify-end'>
      <div className='mr-4'>
        <button className='bg-bgHover-500 hover:bg-bgHover-700 ...'>
          <StarBorderIcon style={{fontSize: 25}} className='ml-2 text-textWhite'/>
        </button>
        <button>
          <MoreHorizIcon style={{fontSize: 25}} className='ml-2 text-textWhite'/>
        </button>
      </div>
    </div>
  )
}

export default Header