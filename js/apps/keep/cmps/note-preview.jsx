import { noteUtilService } from '../services/note.util.service.js';

const { Link } = ReactRouterDOM;

export function NotePreview({ note }) {
  var txt = '';
  var img = '';
  var todos = [];

  if (note.type === 'note-txt') {
    txt = note.info.txt;
  } else if (note.type === 'note-img') {
    txt = note.info.title;
    img = note.info.url;
  } else if (note.type === 'note-todos') {
    txt = note.info.label;
    todos = note.info.todos;
  }
  console.log(note)

  var list = todos.map((todo, idx) => <li key={idx}>{todo.txt}</li>);

  return (
    <Link to={`/Notes/${note.id}`} className='note-preview'>
      <article>
        <div className='note-container'>
          <h3>{txt}</h3>
          <img src={img}/>
          <ul>{list}</ul>
        </div>
      </article>
    </Link>
  );
}
