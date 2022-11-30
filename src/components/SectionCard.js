import '../styles/components/SectionCard.scss';

const SectionCard = (props) => {
    return (
        <section className="mainCreate__card card">
            <button
                className="card__button js_reset-btn"
                title="Reset"
                name="Reset"
                type="button"
                onClick= {props.event}
            >
                <i className="far fa-trash-alt"></i>
                Reset
            </button>
            <article className={`js_card_article card__article palette${props.valuePalette}`}>
                <div className="header-card card__article--data">
                    <h2 className="name js_card_name">
                        {props.valueName === '' ? 'Nombre Apellidos' : props.valueName}
                    </h2>
                    <h3 className="text js_card_job">
                        {props.valueJob === '' ? 'Front-end Developer' : props.valueJob}
                    </h3>
                </div>
                <div className="card__article--photo js_card_img js__profile-image"></div>
                    <nav className="card__article--links">
                        <a className="js_card_phone" href={`tel:${props.valuePhone}`}>
                        <i className="fa-solid fa-mobile-screen-button icon"></i>
                        </a>
                        <a className="js_card_email" href={`mailto:${props.valueEmail}`}>
                        <i className="fa-regular fa-envelope icon"></i>
                        </a>
                        <a className="js_card_linkedin" href={props.valueLinkedin} target="_blank">
                        <i className="fa-brands fa-linkedin-in icon"></i>
                        </a>
                        <a className="js_card_github" href={props.valueGithub} target="_blank">
                        <i className="fa-brands fa-github-alt icon"></i>
                        </a>
                    </nav>
            </article>
        </section>
    )
};

export default SectionCard;


