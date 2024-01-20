import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Conteudo from './Conteudo';


const AddPage = () => {
  

  return (
    <div>
      <div className={`select-none mt-2 cursor-pointer flex items-center py-2 rounded`}>
        <AddIcon style={{ fontSize: 20 }} className='ml-2 text-textWhite' />
        <button className='text-sm pl-2 text-textWhite'>
          Add page
        </button>
      </div>
    </div>
  );
};

export default AddPage;
