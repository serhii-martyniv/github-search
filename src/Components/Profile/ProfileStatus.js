import React, {useState} from "react";

export default (props) => {
    const [status, setStatus] = useState(!props.status ? 'No status' : props.status)
    const [editMode, setEditMode] = useState(false)

    return (
       <div>
           {!editMode &&
               <div>
                   <span onDoubleClick={() => {
                       setEditMode(true)
                   }}>{status}</span>
               </div>
           }
           {editMode &&
               <div>
                   <input value={status} autoFocus={true} onBlur={() => {
                       setEditMode(false)
                   }} onChange={(e) => {
                       setStatus(e.target.value)
                   }}/>
               </div>
           }
       </div>
    )
}