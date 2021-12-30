import { TextNote } from './note-types/text-note.jsx';
import { ImgNote } from './note-types/img-note.jsx';
import { TodoNote } from './note-types/todo-note.jsx';
import { VidNote } from './note-types/vid-note.jsx';

export function Dynamic({ note }) {
  function check(note) {
    switch (note.type) {
      case 'note-txt':
        return <TextNote note={note} />;
      case 'note-img':
        return <ImgNote note={note} />;
      case 'note-todos':
        return <TodoNote note={note} />;
      case 'note-vid':
        return <VidNote note={note} />;
    }
  }
  return check(note)
}
