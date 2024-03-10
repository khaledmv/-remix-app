import noteStyle from "~/styles/note.css";
export default function Note(){
    return (
        <>
          <form action="" method="post" id="note-form">
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>
            
            <div>
                <label htmlFor="content">Content</label>
                <textarea  name="content" id="content" rows="5" required/>
            </div>

             <button type="submit">Submti</button>
          </form>
        </>
    );
}


export function links(){
    return [{rel:"stylesheet", href:noteStyle}];
}