import { NoteService } from '../services/note.service.js';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteAdd } from '../cmps/note-add.jsx';

export class Notes extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = (filterBy = null) => {
    NoteService.query(filterBy).then((notes) => {
      this.setState({ notes });
    });
  };

  render() {
    const { notes, ctg } = this.state;

    return (
      <section className='note-app'>
        <NoteFilter loadNotes={this.loadNotes} />
        <NoteList notes={notes} />
        {/* <NoteAdd/> */}
      </section>
    );
  }
}
