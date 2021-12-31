export class TextNote extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className='notes' style={this.props.note.style} >
        <h3>{this.props.note.info.txt}</h3>
      </div>
    );
  }
}
