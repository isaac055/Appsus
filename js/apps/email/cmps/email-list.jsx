// import { Loader } from './email-loader.jsx'
import { EmailPreview } from './email-preview.jsx'

export function EmailsList({emails, onRemoveEmail, }) {
    // no emails for show
    if (!emails.length) return <h1>There are no emails to show</h1>
    return (
        <section className="email-list">
            {emails.map(email => (
                <EmailPreview

                    key={email.id} email={email}
                    onRemoveEmail={onRemoveEmail}
                />))}
        </section>
    )
}