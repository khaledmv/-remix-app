import { Link } from "@remix-run/react";
import Note, { links as noteLinks} from "~/components/note";
export default function DemoPage(){
    return (
        <>
         <h1>Demo page</h1>
         <Link to="/">Home Page</Link>
         <Note/>
        </>
    )  

}


export function links(){
    return [...noteLinks()];
}