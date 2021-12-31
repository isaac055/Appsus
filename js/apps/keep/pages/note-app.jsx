import { NoteService } from '../services/note.service.js';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';

export class Notes extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = (filterBy = null) => {
    // const { filterBy } = this.state;
    NoteService.query(filterBy).then((notes) => {
      this.setState({ notes });
    });
  };
  

  render() {
      const { notes ,ctg } = this.state;
      
    return (
      <section className="note-app" >
        <NoteFilter loadNotes={this.loadNotes} />
        <NoteList notes={notes} />
      </section>
    );
  }
}
