import noteStyle from "~/styles/note.css";
export default function Note(){
    return (
        <>
          <form action="" method="post">
            <div>
                <label htmlFor="fname"> First Name</label>
                <input type="text" name="name" id="fname" />
            </div>
            
            <div>
                <label htmlFor="flname">Last Name</label>
                <input type="text" name="lastName" id="flname" />
            </div>

             <button type="submit">Submti</button>
          </form>
        </>
    );
}


export function links(){
    return [{rel:"stylesheet", href:noteStyle}];
}