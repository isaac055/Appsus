import { noteService } from '../services/note.service.js';
// import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';

export class Notes extends React.Component {
  state = {
    notes: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    const { filterBy } = this.state;
    noteService.query(filterBy).then((notes) => {
      this.setState({ notes });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadNotes);
  };
  render() {
      const { notes } = this.state;
      
    return (
      <section className="note-app" >
        {/* <NoteFilter onSetFilter={this.onSetFilter} /> */}
        <NoteList notes={notes} />
      </section>
    );
  }
}
