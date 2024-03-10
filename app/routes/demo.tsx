import { Link, redirect, useLoaderData } from "@remix-run/react";
import NodeList from "~/components/NodeList";
import Note, { links as noteLinks} from "~/components/note";

import { getStoredNotes, storedNotes } from "~/data/note";
export default function DemoPage(){
    const notes = useLoaderData();
    return (
        <>
         <Link to="/">Home Page</Link>
         <h1>Demo page</h1>
         <Note/>

          <h2> Note Lists </h2>
         <NodeList notes={ notes }/>
       
         
        </>
    )  

}


export async function loader(){
    const notes = await getStoredNotes();
    // return new Response( JSON.stringify(notes), { headers: {'Content-Type': 'application/josn'}});

    return notes;
}


export async function action({ request }){
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  // validation

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updateNotes = existingNotes.concat(noteData);
  await storedNotes(updateNotes);
  return redirect('/demo');


}


export function links(){
    return [...noteLinks()];
}