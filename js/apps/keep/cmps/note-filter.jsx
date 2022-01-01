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
        <button id="note-txt" name='type' value='note-txt' onClick={this.handleChange} className='fillter-btn fas text'><img width="50px" src="./assets/css/apps/keep/keep-imgs/text-img.png"/></button>
        <button id="note-img" name='type' value='note-img' onClick={this.handleChange} className='fillter-btn far image'><img width="50px" src="./assets/css/apps/keep/keep-imgs/image-img.png"/></button>
        <button id="note-vid" name='type' value='note-vid' onClick={this.handleChange} className='fillter-btn fab video'><img width="50px" src="./assets/css/apps/keep/keep-imgs/video-img.png"/></button>
        <button id="note-todos" name='type' value='note-todos' onClick={this.handleChange} className='fillter-btn fas list'><img width="50px" src="./assets/css/apps/keep/keep-imgs/todos-img.png"/></button>
        </section>
      </section>
    );
  }
}
