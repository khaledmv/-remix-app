import { Link } from "@remix-run/react";
import homePageStyle from "~/styles/homePage.css"

export default function Index(){
  return (
    <>
     <h1>Home Page</h1>
     <Link to="/demo">Demo page</Link>
    </>
  )
}

export function links(){
  return [{rel:'stylesheet',href:homePageStyle}];
}