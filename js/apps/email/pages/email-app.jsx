// import {Details} from  '../apps/keep/pages/note-details'
import { emailService } from '../services/email.service.js'
import { EmailsList } from '../cmps/email-list.jsx'
console.log(EmailsList);

export class MailApp extends React.Component {
    state = {
        emails: [],
        filterBy: null,
    }
    componentDidMount() {
        const urlSearchParams = new URLSearchParams(this.props.location.search)
        console.log(urlSearchParams);
        this.loadEmails()
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
        emailService.query().then(emails => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails } = this.state
        // console.log(emails);

        return (
            <section className="email-app">
                <div className="side-bar">Hello</div>
                <div className="mails">
                    <EmailsList emails={emails} />
                </div>
            </section>
        )
    }
}