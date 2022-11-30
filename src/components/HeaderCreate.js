import image from '../images/title.png';
import '../styles/components/HeaderCreate.scss';
const HeaderCreate = () => {
    return (
        <header className="headerCreate">
            <a href="#">
                <img
                    src={image}
                    className="headerCreate__img"
                    alt="Logo Awesome profile-cards"
                />
            </a>
        </header>
    )
};

export default HeaderCreate;