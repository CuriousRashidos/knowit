import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import './Image.css'

export interface IImageProps {
    source: string;
}

const Image: React.FC<IImageProps> = ({ source }) => {
    const [editMode, setEditMode ] = useState(false)
    return (
        <div>
            {editMode ? <AddIcon /> : <div className="image">
                <img src={source} />
                </div>}
           
        </div>
    );
}

export { Image };