const NoteCard = ({
    note,
    updateNote,
    isUpdating,
    onNoteValueChange,
    onSaveChanges,
    onCancel,
    onDelete,
    onUpdate
}) => {
    return (
        <div className="card">
            {(isUpdating && note.id === updateNote.id) ?
                <div>
                    <input value={updateNote.value} onChange={onNoteValueChange} />
                    <button onClick={onSaveChanges} className='btn'>save</button>
                    <button onClick={onCancel} className='btn'>cancel</button>
                </div>
                :
                <div>
                    <p>
                        {note.value}
                    </p>
                    {
                        !isUpdating && (
                            <>
                                <button onClick={() => onDelete(note.id)} className='btn'>x</button>
                                <button onClick={() => onUpdate(note)} className='btn'>Update</button>
                            </>
                        )
                    }
                </div>
            }
        </div>
    )
};

export default NoteCard;