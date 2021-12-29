// import {Details} from  '../apps/keep/pages/note-details'
import { emailService } from '../services/email.service'
import { emailList } from '../cmps/email-list.jsx'

export class MailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    // get ctgSearchParam() {
    //     const urlSearchParams = new URLSearchParams(this.props.location.search)
    //     return urlSearchParams.get('ctg')
    // }


    get emailsToDisplay() {
        const { emails } = this.state

        return emails
    }

    loadEmails = () => {
        const { filterBy } = this.state
        emailService.query(filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails } = this.state
        console.log(this.state);

        return (
            <section className="email-app">
                <div className="mails">
                    <emailList emails={this.emailsToDisplay} />
                </div>
            </section>
        )
    }
}