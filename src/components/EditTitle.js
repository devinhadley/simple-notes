import React, { useState } from "react";

const EditTitle = ({ titleHook, noteId, noteTitle, saveTitle }) => {
    const [title, editTitle] = useState(noteTitle);

    React.useEffect(() => {
        editTitle(noteTitle);
    }, [noteTitle]);

    return (
        <div>
            <form className="mb-2 mt-2">
                <textarea
                    type="text"
                    onChange={(e) => editTitle(e.target.value)}
                    value={title}
                />
                <button
                    className="btn btn-primary mb-5 ml-1"
                    type="submit"
                    onClick={(e) => (
                        saveTitle(e, noteId, title), titleHook(false)
                    )}
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditTitle;
