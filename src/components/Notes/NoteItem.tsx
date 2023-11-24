import React from "react";

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
        <button onClick={() => onDeleteNote(id)}> Delete </button>
      </div>
    </article>
  );
}

export default NoteItem;
