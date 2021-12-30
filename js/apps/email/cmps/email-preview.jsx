const { Link } = ReactRouterDOM

export function EmailPreview({ email }) {
    console.log(email);
    return (

        <Link className="clean-link" to={`/email/${email.id}`}>
            <div className="email-preview">
                <img src={`https://robohash.org/${email.id}`} alt="" />
                <div className="email-content">
                    <h4>{email.subject}</h4>
                    <h5>{email.body}</h5>
                </div>
            </div>
        // </Link>
    )
}