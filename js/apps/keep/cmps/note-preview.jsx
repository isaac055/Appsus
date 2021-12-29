import { noteUtilService } from '../services/note.util.service.js';

const { Link } = ReactRouterDOM;

export function NotePreview({note}){
    var txt = ''
    var img = ''
    var todo = []

    if(note.type === 'note-txt'){
        txt = note.info.txt
    }
    else if( note.type ==='note-img'){
        txt = note.info.title
        img = note.info.url
    }
    else if(note.type ==='note-todos'){
        txt = note.info.label
        todo = note.info.todos
    }
    console.log(todo)




    return(
        <Link to={`/Notes/${note.id}`} className="note-preview">
            <article>
                <div className="note-container" >
                    <p>{txt}</p>
                    <p>{img}</p>
                    <p>hi</p>
                </div>
            </article>
        </Link>
    )
}