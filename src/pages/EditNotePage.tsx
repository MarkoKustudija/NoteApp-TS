import React from "react";
import NoteForm from "../components/Notes/NoteForm";
import { useRouteLoaderData } from "react-router-dom";

function EditNotePage() {

  const data = useRouteLoaderData("note-detail") as {
    id: number;
    title: string;
    content: string;
  };

  const note = {
    id: data.id,
    title: data.title,
    content: data.content,
  };

  return <NoteForm method="post" note={note} />;
}

export default EditNotePage;
