export class VidNote extends React.Component {
  state = {};
  componentdidmount() {}

  emedUrl = (url) => {
    return url.replace('https://www.youtube.com/watch?v=', '');
  };

  render() {
    return (
      <div className='notes' style={this.props.note.style}>
        <h3>{this.props.note.info.title}</h3>
        <iframe
          src=''
          frameBorder='3'
          width={200}
          height={250}
          allowFullScreen
          src= {`https://www.youtube.com/embed/${this.emedUrl(this.props.note.info.url)}`}
        ></iframe>
      </div>
    );
  }
}





