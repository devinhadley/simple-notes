import React, { useState } from "react";

const Note = ({ dataId, title, toggleContent, showDelete, removeNote }) => {
    const [titleContent, setTitleContent] = useState(title);

    React.useEffect(() => {
        setTitleContent(title);
    }, [title]);

    return (
        <div
            onClick={
                showDelete == false ? () => toggleContent(dataId) : () => {}
            }
            className="note"
        >
            {showDelete && (
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeNote(dataId)}
                >
                    Delete
                </button>
            )}

            <p style={{ color: "white" }}>{titleContent}</p>
        </div>
    );
};
export default Note;
