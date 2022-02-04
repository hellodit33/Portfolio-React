import { Link } from 'react-router-dom';
import "../layout/Error.css";
const Error = () => {
    return (
        <>
            <section className="error">
                <h1>A typical error 404 :( <br />The page you were looking for does not exist.<br /><Link to="/">Find your way home</Link> </h1>

            </section>
        </>
    )

}

export default Error;