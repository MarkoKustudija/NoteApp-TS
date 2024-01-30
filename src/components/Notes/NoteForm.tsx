
import Button from "../UI/Button";
import Input from "../UI/Input";
import {Form, json, redirect} from 'react-router-dom'
import classes from './NoteForm.module.css';
import { Note } from "../../App";


type NoteFormProps = {
   method: any,
   note? : Note
}

function NoteForm( {method, note}: NoteFormProps) {
  

  return (
    <Form className={classes.form} method= {method} >
      <div>
        <Input
          id="title"
          type="text"
          label="Title"
          name="title"
          required
          defaultValue={note ? note.title : ''}
        />
      </div>
      <div>
        <label> Content</label>
        <textarea
          id="content"
          rows={3}
          name="content"
          required
          defaultValue={note ? note.content : ''}
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


type actionProps = {
  request: any,
  params: any
}
export async function action({ request, params } : actionProps) {
  const method = request.method;
  const data = await request.formData();

  const noteData = {
    title: data.get('title'),
    content: data.get('content')
  };

  let url = 'http://localhost:8080/notes';

  if (method === 'PUT') {
    const id = params.id;
    url = 'http://localhost:8080/notes/' + id;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save note.' }, { status: 500 });
  }

  return redirect('/notes');
}
