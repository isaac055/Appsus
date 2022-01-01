export class NoteFilter extends React.Component {
  state = {
    filterBy: {
      type:''
    },
  };

  handleChange = ({ target }) => {
		const field = target.name;
		const value = target.type === "number" ? +target.value : target.value;
		this.setState(
			(prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
			() => {
				this.props.loadNotes(this.state.filterBy);
			}
		);
  }
//   onSubmitFilter = (ev) => {
//     ev.preventDefault()
//     this.props.loadNotes(this.state.filterBy)
//     this.cleanForm()
// }
//   cleanForm = () => {
//     this.setState({ filterBy: { type:''} })
// }

  render() {
    const { value } = this.state;
    return (
      <section> 
        <input className='flex' placeholder='Search...' type='text' name='text' value={value} onChange={this.handleChange} />
        <section className='flex' >
        <button id="note-txt" name='type' value='note-txt' onClick={this.handleChange} className='fillter-btn fas text'>note-txt</button>
        <button id="note-img" name='type' value='note-img' onClick={this.handleChange} className='fillter-btn far image'>note-img</button>
        <button id="note-vid" name='type' value='note-vid' onClick={this.handleChange} className='fillter-btn fab video'>note-vid</button>
        <button id="note-todos" name='type' value='note-todos' onClick={this.handleChange} className='fillter-btn fas list'>note-todos</button>
        </section>
      </section>
    );
  }
}
