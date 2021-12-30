import { Dynamic } from './note.dynamic.jsx';

const { Link } = ReactRouterDOM;

export function NotePreview({ note }) {
  return (
    <Link to={`/Notes/${note.id}`} className='note-preview'>
      <Dynamic note={note} />
    </Link>
  );
}
