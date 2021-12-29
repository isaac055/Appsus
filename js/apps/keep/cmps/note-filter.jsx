export class NoteFilter extends React.Component {
  state = {
    filterBy: {
      importint: '',
    },
  };

  onSubmitFilter = (ev) => {
    ev.preentDefult();
    this.prop.onSetFilter(this.state.filterBy);
    this.cleanForm();
  };

  handelChange = ({ target }) => {
      const field = target.name
  };
}
