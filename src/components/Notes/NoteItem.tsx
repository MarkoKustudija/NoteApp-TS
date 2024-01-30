import React, { PropsWithChildren } from "react";
import { Link, useSubmit } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./NoteItem.module.css";

export type NoteItemProps = PropsWithChildren<{
  note: {
    id?: number;
    title: string;
    content: string;
  };
  onDeleteNote?: (noteId: number) => void;
}>;

function NoteItem({ note, children }: NoteItemProps) {
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <article className={classes.item}>
        <h2>Title: {note.title}</h2>
        <h2>Content: {note.content}</h2>
      <menu className={classes.actions}>
        {/* <Link to=":id/edit">Edit</Link> */}
        <Link to="edit">
          <h3>Edit</h3>
        </Link>
        <Button onClick={startDeleteHandler}>
          <h3>Delete</h3>
        </Button>
      </menu>
    </article>
  );
}

export default NoteItem;
