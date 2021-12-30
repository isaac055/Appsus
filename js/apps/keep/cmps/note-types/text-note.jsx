export class TextNote extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>{this.props.note.info.txt}</h3>
      </div>
    );
  }
}
