// import { Loader } from './email-loader.jsx'
import { emailPreview } from './email-preview.jsx'

export function emailsList({ emails }) {
    // no emails for show
    if (!emails.length) return <h1>There are no emails to show</h1>
    return (
        <section className="email-list">
            {emails.map(email => <emailPreview key={email.id} email={email} />)}
        </section>
    )
}