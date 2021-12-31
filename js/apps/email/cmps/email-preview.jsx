const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js'

export function EmailPreview({email, onRemoveEmail}) {
    return (
        <section>
            <Link className="clean-link" to={`/email/${email.id}`}
                onClick={() => emailService.markedAsRead(email)}>
                <div className="email-preview">
                    <img src="./assets/img/user-.png" alt="" />
                    <div className="email-content">
                        <h4>{email.subject}</h4>
                        <h5>{email.body}</h5>

                    </div>
                </div>
            </Link>
            <button onClick={() => onRemoveEmail(email.id)}>remove</button>
        </section>
    )
}