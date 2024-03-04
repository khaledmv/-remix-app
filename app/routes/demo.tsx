import { Link } from "@remix-run/react";
import demoStyles from "~/styles/demoPage.css"
export default function DemoPage(){
    return (
        <>
         <h1>Demo page</h1>
         <Link to="/">Home Page</Link>
        </>
    )  

}


export function links(){
    return [{rel:"stylesheet", href:demoStyles}];
}