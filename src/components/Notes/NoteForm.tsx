import React, { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Form, { FormHandle } from "../UI/Form";

type OnAddNote = (title: string, content: string) => void;

function NoteForm(props: { onAddNote: OnAddNote }) {
  
  // const titleRef = useRef<HTMLInputElement>(null);
  // const contentRef = useRef<HTMLInputElement>(null);

  const form = useRef<FormHandle>(null);

  const sumbitFormHandled = (data: unknown) => {
    const extractedData = data as { title: string; content: string };
    props.onAddNote(extractedData.title, extractedData.content);
    form.current?.clear();
  };

  // const sumbitFormHandled = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const data = {
  //     title: titleRef.current!.value,
  //     content: contentRef.current!.value,
  //   };

  //   const { title, content } = data;
  //   props.onAddNote(title, content);

  //   event.currentTarget.reset();
  // };

  return (
    <Form ref={form} onSave={sumbitFormHandled}>
      <div>
        {/* <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" ref={titleRef} /> */}
        <Input
          id="title"
          type="text"
          label="Title"
          name="title"
          // ref={titleRef}
        />
      </div>
      <div>
        {/* <label htmlFor="content">Content</label> */}
        {/* <input id="content" type="text" name="content" ref={contentRef} /> */}
        <Input
          id="content"
          type="text"
          label="Content"
          name="content"
          // ref={contentRef}
        />
      </div>
      <div>
        <Button> Add Note </Button>
      </div>
      <br />
    </Form>
  );
}

export default NoteForm;
