import React, { FormEvent, useRef } from "react";
import Button from "../UI/Button";

type OnAddNote =  (title: string, content: string) => void;

function NoteForm(props:  {onAddNote: OnAddNote}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const sumbitFormHandled = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
        title : titleRef.current!.value,
        content: contentRef.current!.value
    }

    const {title, content} = data;
    props.onAddNote(title, content);
    
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={sumbitFormHandled}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <input id="content" type="text" name="content" ref={contentRef} />
      </p>
      <p>
        <Button> Add Note </Button>
      </p>
    </form>
  );
}

export default NoteForm;
