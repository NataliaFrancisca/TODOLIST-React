import React from 'react';
import './Task.css';
import { useState } from 'react';

const Task = (props) => {

    const [taskStyle, setTaskStyle] = useState("");

    const onCheck = () => {
        setTaskStyle("checked");
    }

    return(
        <div className={taskStyle + " container-task"}>
            <p className="container-text">{props.textTarefa}</p>
                <div className="container-buttons">
                    <button onClick={onCheck}>
                        <span class="material-icons">done</span>
                    </button>
                    <button onClick={props.onDelete}>
                        <span class="material-icons">delete</span>
                    </button>
                </div>
        </div>
    )
}

export default Task;