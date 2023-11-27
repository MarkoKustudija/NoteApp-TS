import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

export type NoteItemProps = {
  note: {
    id: number;
    title: string;
    content: string;
  };
  onDeleteNote?: (noteId: number) => void;
};

function NoteItem({ note, onDeleteNote }: NoteItemProps) {

  const navigate = useNavigate();

  const editNoteHandler = () => {
    navigate(`/notes/${note.id}/edit`);
    // navigate(`:id/edit`);
  };

  return (
    <menu>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div>
        {onDeleteNote && (
          <Button onClick={() => onDeleteNote(note.id)}> Delete </Button>
        )}
        <Button onClick={() => editNoteHandler()}> Edit </Button>
      </div>
    </menu>
  );
}

export default NoteItem;
