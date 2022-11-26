import '../styles/App.scss';
import image from '../images/title.png';
import logo from '../images/logo-adalab.png';
import scrollDown from '../images/ico-scroll-down.svg';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

  const [designIsOpen, setDesignIsOpen] = useState(true);
  const [fillIsOpen, setFillIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);
  const [arrowRotateDesign, setArrowRotateDesign] = useState('arrowRotate');
  const [arrowRotateFill, setArrowRotateFill] = useState('');
  const [arrowRotateShare, setArrowRotateShare] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setUser({ ...user, [inputName]: inputValue });
    console.log(user);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser ({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
    });
  };

  const handleToggleDesign = () => {
    if (designIsOpen === false) {
      setDesignIsOpen(!designIsOpen);
      setFillIsOpen(false);
      setShareIsOpen(false);
      setArrowRotateDesign('arrowRotate');
      setArrowRotateFill('');
      setArrowRotateShare('');
    }
  };

  const handleToggleFill = () => {
    if (fillIsOpen === false) {
      setFillIsOpen(!fillIsOpen);
      setShareIsOpen(false);
      setDesignIsOpen(false);
      setArrowRotateFill('arrowRotate');
      setArrowRotateDesign('');
      setArrowRotateShare('');
    }
  };

  const handleToggleShare = () => {
    if (shareIsOpen === false) {
      setShareIsOpen(!shareIsOpen);
      setFillIsOpen(false);
      setDesignIsOpen(false);
      setArrowRotateShare('arrowRotate');
      setArrowRotateFill('');
      setArrowRotateDesign('');
    }
  };

  const renderDesign = () => {
    if (designIsOpen === true) {
      return (
        <section className="largeContainerDesign  js-design">
          <div className="mediumContainerDesign">
            <div className="boxDesignColorsLabel">
              <span className="colorsText">Colores</span>
            </div>
            <div className="colorPalette__container1">
              <input
                id="palette1"
                className="colorPalette__input1 js-palette1"
                type="radio"
                value="1"
                name="palette"
                checked={user.palette === '1'}
                onChange={handleInput}
              />
              <section className="colorsBoxOne">
                <div className="rectangle__a1"></div>
                <div className="rectangle__a2"></div>
                <div className="rectangle__a3"></div>
              </section>
            </div>
          </div>

          <div className="colorPalette__container2">
            <input
              id="palette2"
              className="js-palette2 colorPalette__input2 "
              type="radio"
              value="2"
              name="palette"
              checked={user.palette === '2'}
              onChange={handleInput}
            />
            <section className="colorsBoxTwo">
              <div className="rectangle__b1"></div>
              <div className="rectangle__b2"></div>
              <div className="rectangle__b3"></div>
            </section>
          </div>

          <div className="colorPalette__container3">
            <input
              id="palette3"
              className="js-palette3 colorPalette__input3"
              type="radio"
              value="3"
              name="palette"
              checked={user.palette === '3'}
              onChange={handleInput}
            />
            <section className="colorsBoxThree">
              <div className="rectangle__c1"></div>
              <div className="rectangle__c2"></div>
              <div className="rectangle__c3"></div>
            </section>
          </div>
        </section>
      );
    }
  };

  const renderFill = () => {
    if (fillIsOpen === true) {
      return (
        <div action="" className="fill js-fill">
          <label htmlFor="full_name" className="fill__infoLabel">
            Nombre completo
          </label>
          <input
            type="text"
            id="full_name"
            name="name"
            className="fill__infoInput js_input_name js_inputReset"
            placeholder="Nombre Apellido"
            required
            autoComplete="name"
            value={user.name}
            onInput={handleInput}
          />

          <label htmlFor="job" className="fill__infoLabel">
            Puesto
          </label>
          <input
            type="text"
            id="job"
            name="job"
            className="fill__infoInput js_input_job js_inputReset"
            placeholder="Full stack developer"
            required
            value={user.job}
            onInput={handleInput}
          />

          <label htmlFor="imageForm" className="fill__infoLabel">
            Imagen de perfil
          </label>
          <div className="fill__action ">
            <label
              htmlFor="imageForm"
              className="fill__infoLabel fill__action--labelInput"
            >
              Añadir imagen
            </label>
            <input
              type="file"
              accept="image/*"
              className="fill__infoInput fill__action--imageInput js_input_img js__profile-upload-btn js_inputReset"
              id="imageForm"
              name="img"
            />
            <div className="fill__action--preview js__profile-preview"> </div>
          </div>

          <label htmlFor="email" className="fill__infoLabel">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="fill__infoInput js_input_email js_inputReset"
            placeholder="ejemplo@dominio.tld"
            autoComplete="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={user.email}
            onInput={handleInput}
          />
          <small className="fill__small js-small-text"></small>

          <label htmlFor="phone" className="fill__infoLabel">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="fill__infoInput js_input_phone js_inputReset"
            placeholder="XXXXXXXXX"
            autoComplete="tel"
            required
            pattern="[6-9]{1}[0-9]{8}"
            value={user.phone}
            onInput={handleInput}
          />
          <small className="fill__small js-small-text"></small>

          <label htmlFor="linkedin" className="fill__infoLabel">
            Linkedin
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            className="fill__infoInput js_input_linkedin js_inputReset"
            placeholder="usuario"
            autoComplete="url"
            value={user.linkedin}
            onInput={handleInput}
          />

          <label htmlFor="github" className="fill__infoLabel">
            Github
          </label>
          <input
            type="text"
            id="github"
            name="github"
            className="fill__infoInput js_input_github js_inputReset"
            placeholder="usuario"
            autoComplete="url"
            value={user.github}
            onInput={handleInput}
          />
        </div>
      );
    }
  };

  const renderShare = () => {
    if (shareIsOpen === true) {
      return (
        <section className="buttonComparte js-share">
          <a href="" className="linkComparte js-linkCreated">
            <i className="fa-regular fa-address-card"></i>Crear Tarjeta
          </a>
          <article className="cardCreated js-cardCreated hidden js-share">
            <h3 className="cardCreated_text js-textError"></h3>
            <a
              className="cardCreated_link js-shareUrl"
              href=""
              target="_blank"
            ></a>
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
    <div>
      {/* HEADER */}
      <header className="headerCreate">
        <a href="#">
          <img
            src={image}
            className="headerCreate__img"
            alt="Logo Awesome profile-cards"
          />
        </a>
      </header>

      <main className="mainCreate">
        {/* TARJETA */}
        <section className="mainCreate__card card">
          <button
            className="card__button js_reset-btn"
            title="Reset"
            name="Reset"
            type="button"
            onClick={handleReset}
          >
            <i className="far fa-trash-alt"></i>
            Reset
          </button>
          <article className={`js_card_article card__article palette${user.palette}`}>
            <div className="header-card card__article--data">
              <h2 className="name js_card_name">
                {user.name === '' ? 'Nombre Apellidos' : user.name}
              </h2>
              <h3 className="text js_card_job">
                {user.job === '' ? 'Front-end Developer' : user.job}
              </h3>
            </div>
            <div className="card__article--photo js_card_img js__profile-image"></div>
            <nav className="card__article--links">
              <a className="js_card_phone" href="">
                <i className="fa-solid fa-mobile-screen-button icon"></i>
              </a>

              <a className="js_card_email" href="">
                <i className="fa-regular fa-envelope icon"></i>
              </a>

              <a className="js_card_linkedin" href="" target="_blank">
                <i className="fa-brands fa-linkedin-in icon"></i>
              </a>

              <a className="js_card_github" href="" target="_blank">
                <i className="fa-brands fa-github-alt icon"></i>
              </a>
            </nav>
          </article>
        </section>

        {/* CUESTIONARIO */}
        <form className="mainCreate__design" onSubmit={handleSubmit}>
          {/* DISEÑA */}
          <fieldset className="design">
            <div
              className="buttonDesign js-designClick"
              onClick={handleToggleDesign}
            >
              <legend className="buttonDesign__title">
                <i className="fa-solid fa-object-ungroup"></i> Diseña{' '}
              </legend>
              <img
                src={scrollDown}
                className={`buttonDesign__arrow js-arrow-design ${arrowRotateDesign}`}
                alt=""
              />
            </div>
            {renderDesign()}
          </fieldset>

          {/* RELLENA */}
          <fieldset>
            <div className="buttonFill js-fillClick" onClick={handleToggleFill}>
              <legend className="buttonFill__title">
                <i className="fa-regular fa-keyboard"></i>Rellena
              </legend>
              <img
                src={scrollDown}
                className={`buttonFill__arrow js-arrow-fill ${arrowRotateFill}`}
                alt=""
              />
            </div>
            {renderFill()}
          </fieldset>

          {/* COMPARTE */}
          <fieldset className="share">
            <section
              className="buttonShare js-shareClick"
              onClick={handleToggleShare}
            >
              <p className="buttonShare__title">
                <i className="fa-solid fa-share-nodes"></i> Comparte{' '}
              </p>
              <img
                src={scrollDown}
                className={`buttonShare__arrow js-arrow-share ${arrowRotateShare}`}
                alt=""
              />
            </section>
            {renderShare()}
          </fieldset>
        </form>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <small className="footer__small">
          Awesome profile-cards &copy; 2022
        </small>
        <img src={logo} className="footer__img" alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
