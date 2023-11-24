import React from "react";
import Button from "../UI/Button";

export type NoteItemProps = {
  id: number;
  title: string;
  content: string;
  onDeleteNote: (noteId: number) => void;
};

function NoteItem({ id, title, content, onDeleteNote }: NoteItemProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

      <div>
        <Button onClick={() => onDeleteNote(id)}> Delete </Button>
      </div>
    </article>
  );
}

export default NoteItem;
