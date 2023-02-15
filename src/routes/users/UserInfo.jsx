import React from "react";
import Form from "./Form";
import Tag from "./Tag";
import TagState from "./TagState";

const UserInfo = () => {
    return (
        <TagState>
            <div className="flex flex-row" style={{height: '85%', marginLeft: '35px', marginRight: '36px'}}>
                <Tag/>
                <Form/>
            </div>
        </TagState>
    )
}

export default UserInfo