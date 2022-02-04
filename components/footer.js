import Link from "next/dist/client/link";

const Footer = () => {


    return (
        <footer>
            <div className="container-footer">
                <div className="footer-elm">
                <span className="titre">Cie Fact &nbsp;&nbsp;–</span>
                </div>
                <div className="footer-elm">
                    Développement : <span className="name"><a href="https://www.malt.fr/profile/romainpruvost">Romain Pruvost</a></span>
                </div>
                <div className="footer-elm">
                Processing P5js : <br className="d-mob-block"/><span className="name"><a href="https://www.instagram.com/louisvrx/">Louis Voreux</a></span>
                </div>
                <div className="footer-elm">
                Design : <span className="name"><a href="https://felixbisiaux.com/">Felix Bisiaux</a></span>
                </div>
                <div className="footer-elm">
                <span><Link href="/mentions-legales">Mentions légales</Link></span>
                </div>
            </div>
        </footer>
    );
}


export default Footer