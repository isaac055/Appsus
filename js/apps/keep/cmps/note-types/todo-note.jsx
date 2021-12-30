export class TodoNote extends React.Component {
  state = {};
  componentdidmount() {}

  render() {
    return (
      <div className='notes'>
        <h3>{this.props.note.info.label}</h3>
        {/* <ul> */}
          {this.props.note.info.todos.map((todo, idx) => {
            return <li key={idx}>{todo.txt}</li>;
          })}
        {/* </ul> */}
      </div>
    );
  }
}
