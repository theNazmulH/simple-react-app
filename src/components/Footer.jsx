import About from "./About"
import Quotes from "./Quotes"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <About />
                <Quotes />
            </div>
        </footer>
    )
}

export default Footer