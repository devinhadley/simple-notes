import React, {useState, useEffect} from 'react'
import EditTitle from './EditTitle'


const TextRegion = ({ activeNote, updateContent, saveNote, saveTitle }) => {



    const [formText, setFormText] = useState(activeNote.content) 
        
    useEffect(() => {
        setFormText(activeNote.content);
      }, [activeNote.content]);

    const [titleEditState, setTitleEditState] = useState(false)


    return (
	<div className="form-div">
        {!titleEditState ? 


        <h3 style={{'cursor': 'pointer'}} className="center" onDoubleClick={() => setTitleEditState(true)}>{activeNote.title}</h3>


        : <EditTitle titleHook={setTitleEditState} saveTitle={saveTitle} noteId={activeNote.id} noteTitle={activeNote.title}/>} 
        <form className="form">



                <textarea className="content form-control" type="text" onChange={((e) => setFormText(e.target.value))} value={formText}/>
            
            
            

		<button style={{'float': 'right'}} className="btn btn-primary mt-2 mr-2" onClick={(e) => saveNote(e, activeNote.id, formText)}>Save</button>

        </form>

	</div>

    )



}

export default TextRegion;
