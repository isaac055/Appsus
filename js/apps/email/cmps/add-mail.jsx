import { emailService } from "../services/email.service.js";
export class AddEmail extends React.Component {
    state = {
        email: {
            to: '',
            subject: '',
            body: '',
        },
    };
    inputRef = React.createRef();

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({
            email: { ...prevState.email, [field]: value },
        }));
    };


    componentDidMount() {
        this.inputRef.current.focus()
        // this.loadEmail()
    }

    onSaveEmail = (ev) => {
        ev.preventDefault();
        const { email } = this.state;
        emailService.saveMail(email);
        this.props.onAddEmail();
    };

    render() {
        const { to, subject, body } = this.state.email;
        return (
            <div>
                <section className='email-compose'>
                    
                        <form className='send-mail-form' onSubmit={this.onSaveEmail}>
                            <button
                                className='close-mail-form'
                                onClick={() => this.props.onAddEmail()}>
                                ×
                            </button><br/>
                            <label htmlFor="to-user">To:</label>
                            <input
                                ref={this.inputRef}
                                name='to'
                                type='text'
                                id='to-user'
                                value={to}
                                onChange={this.handleChange}
                            /><br/>
                            <label htmlFor="subject">Subject:</label>
                            <input
                                name='subject'
                                type='text'
                                id='subject'
                                value={subject}
                                onChange={this.handleChange}
                            /><br/>
                             <label htmlFor="body">Body</label>
                            <textarea name='body' value={body} onChange={this.handleChange} />
                            <br/><button>Send mail</button>
                        </form>
                    
                </section>
            </div>
        );
    }
}
