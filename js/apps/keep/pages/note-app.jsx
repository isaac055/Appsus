import { Preview } from '../cmps/note-preview.jsx';
import { noteService } from '../services/note.service.js';

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

  onSetFilter = (filterBy)=> {
      this.setState({filterBy},this.loadNotes)
  }
}
