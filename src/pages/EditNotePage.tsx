import React from "react";
import NoteForm from "../components/Notes/NoteForm";
import { useRouteLoaderData } from "react-router-dom";
import { Note } from "../App";

function EditNotePage() {

  const data = useRouteLoaderData("note-detail") as Note;

  const note = {
    id: data.id,
    title: data.title,
    content: data.content,
  };

  return <NoteForm method="put" note={note} />;
}

export default EditNotePage;
