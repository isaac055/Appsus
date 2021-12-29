// import {Details} from  '../apps/keep/pages/note-details'
// import {Index} from  '../apps/keep/pages/note-index'


export class Mail extends React.Component {
    render() {
       
        return (
            <section className="mails">
                
                <form onSubmit={this.onSaveCar} >
                    {/* <label htmlFor="by-vendor">Vendor:</label>
                    <input ref={this.inputRef} placeholder="Enter vendor" name="vendor" type="text" id="by-vendor" value={vendor} onChange={this.handleChange} />
                    <label htmlFor="by-speed">Speed:</label>
                    <input placeholder="Enter speed" name="speed" type="number" id="by-speed" value={speed} onChange={this.handleChange} />
                    <button className="primary-btn ">Save car</button> */}
                </form>
            </section>
        )
    }
}