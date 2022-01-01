// import {Details} from  '../apps/keep/pages/note-details'
import { emailService } from '../services/email.service.js'
import { EmailsList } from '../cmps/email-list.jsx'
import { AddEmail } from '../cmps/add-mail.jsx'
console.log(EmailsList);

export class MailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
        isModalOpen: false
    }
    componentDidMount() {
        const urlSearchParams = new URLSearchParams(this.props.location.search)
        console.log(urlSearchParams);
        this.loadEmails()
    }



    get emailsToDisplay() {
        const { emails } = this.state
        return emails
    }

    loadEmails = () => {
        // const { filterBy } = this.state
        emailService.query().then(emails => {
            this.setState({ emails })
        })
    }

    onAddEmail = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
        this.loadEmails();
    }

    onRemoveEmail = (id) => {
        console.log(' delet');

        emailService.removeEmail(id).then(() => {
            console.log('id:', id);
            // eventBusService.emit('user-msg', {
            //     txt: 'mail is deleted !',
            //     type: 'danger',
            // });
        });
        this.loadEmails();
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails, isModalOpen } = this.state
        // console.log(emails);

        return (
            <section className="email-app">
                <div className="side-bar">
                    <button className='compose-btn' onClick={this.onAddEmail}>Compose</button>
                    {isModalOpen && <AddEmail onAddMail={this.onAddEmail} />}
                </div>
                <div className="mails">

                    {/* TOGGLE ISMODALOPEN INSTATE */}
                    <EmailsList
                        emails={emails}
                        onRemoveEmail={this.onRemoveEmail}
                    />

                </div>
            </section>
        )
    }
}