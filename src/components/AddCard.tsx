import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './AddCard.css'

export default function AddCard() {

  return (
      <div className='addCard'>
          <div className="addCard__option">
                <AddIcon fontSize="large"/>
          </div>
          <div className='addCard__message'>
            <p> Add Card</p>
          </div>
          
    </div>
  );
}
