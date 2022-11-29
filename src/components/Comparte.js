import '../styles/components/Comparte.scss';
const Comparte = (props) => {
    const renderShare = () => {
        if (props.shareState === true) {
            return (
                <section className="buttonComparte js-share">
                    <a href="" className="linkComparte js-linkCreated" onClick={props.eventClick}>
                        <i className="fa-regular fa-address-card"></i>Crear Tarjeta
                    </a>
                    <article className="cardCreated js-cardCreated hidden js-share">
                        <h3 className="cardCreated_text js-textError"></h3>
                        <a
                            className="cardCreated_link js-shareUrl"
                            href=""
                            target="_blank"
                        >{props.response}</a>
                        <a className="cardCreated_button js-twitter hidden" target="_blank">
                            <i className="fa-brands fa-twitter" href=""></i>Compartir en
                            twitter
                        </a>
                    </article>
                </section>
            );
        }
    };
    return (
        <fieldset className="share">
            <section
                className="buttonShare js-shareClick"
                onClick={props.event}
            >
                <p className="buttonShare__title">
                    <i className="fa-solid fa-share-nodes"></i> Comparte{' '}
                </p>
                <img
                    src={props.src}
                    className={`buttonShare__arrow js-arrow-share ${props.arrowState}`}
                    alt=""
                />
            </section>
            {renderShare()}
        </fieldset>
    )
};
export default Comparte;