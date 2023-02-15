import React, { useState, useContext } from 'react';
import {
  List,
  ListProps,
  Collapse,
} from '@mui/material';
import { mapRecursive } from './mapRecursive.ts';
import { TagStructure } from './TagSructure';
import TagContext from "./TagContext";
import {UserMachineContext} from './userStateMachine.js'

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TabRow from './TabRow';

export interface TagTreeProps extends ListProps {
    menu: TagStructure[]
    level?: number
}

export const TagTree: React.FC<TagTreeProps> = ({
    level = 1,
    menu: menuProp,
    ...props
}) => {
    const [menu, setMenu] = useState<TagStructure[]>(menuProp || [])
    const { addTagToUser } = useContext(TagContext)
    const {machine} = useContext(UserMachineContext)
    const [state] = machine

    const open = (id: string) => {
        setMenu((prevMenu) =>
          mapRecursive(prevMenu, (item) => {
            if (item.id === id) {
              return { ...item, open: !item.open };
            }
            return item;
          })
        );
    };

    return(
        <List {...props}>
            {menu.map((item, index) => (
                <React.Fragment key={`${index}-${item.id}`}>
                  <TabRow level={level} addTagToUser={addTagToUser} state={state} val={item.name}>
                    <div>
                      <button style={{ display: 'flex' }} onClick={() => open(item.id)}>
                        {item.children && 
                          (item.open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                        <p>{item.name}</p>
                      </button>
                    </div>
                  </TabRow>

                  {item.children && (
                    <Collapse in={item.open} timeout="auto">
                      <TagTree menu={item.children} level={level + 5}/>
                    </Collapse>
                  )}
                </React.Fragment>
            ))}
        </List>
    )

}