import React, { useState } from "react";
import Note from "./Note";

const Notes = ({ data, toggleContent, showDelete, removeNote }) => {
    return (
        <div>
            {data.map((note) => (
                <Note
                    removeNote={removeNote}
                    showDelete={showDelete}
                    key={note.id}
                    toggleContent={toggleContent}
                    dataId={note.id}
                    title={note.title}
                />
            ))}
        </div>
    );
};
export default Notes;
