export class TextNote extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className='notes' >
        <h3>{this.props.note.info.txt}</h3>
      </div>
    );
  }
}
