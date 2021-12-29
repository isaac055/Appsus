const { Link } = ReactRouterDOM

export function emailPreview({ email }) {
    return (
        // <Link className="clean-link" to={`/email/${email.id}`}>
            <div className="email-preview">
                <img src={`https://robohash.org/${email.id}`} alt="" />
                <h4>{email.subject}</h4>
                <h5>{email.body}</h5>
            </div>
        // </Link>
    )
}