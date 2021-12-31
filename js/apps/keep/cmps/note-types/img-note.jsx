export class ImgNote extends React.Component {
  state = {};
  componentdidmount() {}

  render() {
    return (
      <div className='notes' style={this.props.note.style}>
        <h3>{this.props.note.info.title}</h3>
        <img width='150' src={this.props.note.info.url} />
      </div>
    );
  }
}
