import React, {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Styles = {
    hiddenButton: {
        backgroundColor: 'rgb(37,2,116)',
        color: '#FFF',
        borderRadius: '5px',
        paddingRight: '5px',
        paddingLeft: '5px',
    }
}

export const TabRow = ({level, children, state, addTagToUser, val}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                backgroundColor: isHovered ? 'rgb(235,235,235)' : '#F8F8F8',
                display: 'flex',
                marginTop: '2%',
                justifyContent: 'space-between',
                paddingTop: '1%',
                paddingBottom: '1%',
                height: '40px',
                alignItems: 'center',
                paddingLeft: `${level}%`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
           {children}
           {isHovered ? 
                      <div>
                        <button 
                          disabled={state.matches('viewUser')}
                          onClick={() => addTagToUser(val)}
                          style={Styles.hiddenButton}
                        >Add a new tag</button>
                        <DeleteOutlineIcon/>
                        <MoreVertIcon/>
                      </div> : <div></div>
            }
        </div>
    )
}

export default TabRow