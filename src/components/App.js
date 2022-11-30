import '../styles/App.scss';
import scrollDown from '../images/ico-scroll-down.svg';
import { useState } from 'react';
import localCard from '../services/api';
import HeaderCreate from './HeaderCreate';
import FieldsetRellena from './FieldsetRellena';
import SectionCard from './SectionCard';
import Footer from './Footer';


function App() {
  const [user, setUser] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: 'http://placekitten.com/g/200/300',
  });

  const [designIsOpen, setDesignIsOpen] = useState(true);
  const [fillIsOpen, setFillIsOpen] = useState(false);
  const [shareIsOpen, setShareIsOpen] = useState(false);
  const [arrowRotateDesign, setArrowRotateDesign] = useState('arrowRotate');
  const [arrowRotateFill, setArrowRotateFill] = useState('');
  const [arrowRotateShare, setArrowRotateShare] = useState('');
  const [fetchResponse, setFetchResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInput = (inputValue,inputName) => {
    // const inputValue = event.target.value;
    // const inputName = event.target.name;
    setUser({ ...user, [inputName]: inputValue });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
    });
  };
  const handleClickCreate = (event) => {//falta comprobar que funciona
    event.preventDefault();
    localCard(user).then((response) => {
      console.log(response)
      setFetchResponse(response);
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

  // RenderFill

  const renderShare = () => {
    if (shareIsOpen === true) {
      return (
        <section className="buttonComparte js-share">
          <a href="" className="linkComparte js-linkCreated" onClick={handleClickCreate}>
            <i className="fa-regular fa-address-card"></i>Crear Tarjeta
          </a>
          <article className="cardCreated js-cardCreated hidden js-share">
            <h3 className="cardCreated_text js-textError"></h3>
            <a
              className="cardCreated_link js-shareUrl"
              href=""
              target="_blank"
            >{fetchResponse}</a>
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
      <HeaderCreate></HeaderCreate>
      <main className="mainCreate">
        {/* TARJETA */}
        <SectionCard 
        event={handleReset}
        valueName={user.name}
        valueJob={user.job}
        valuePalette={user.palette}
        valuePhone={user.phone}
        valueEmail={user.email}
        valueLinkedin={user.linkedin}
        valueGithub={user.github}
        ></SectionCard>

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
         
         <FieldsetRellena
         
         fillState = {fillIsOpen}
         valueName = {user.name}
         valueJob = {user.job}
         valueEmail = {user.email}
         valuePhone = {user.phone}
         valueLinkedin = {user.linkedin}
         valueGithub = {user.github}
         handleInput = {handleInput} 
         eventClick = {handleToggleFill}
         src={scrollDown}
         arrowState={arrowRotateFill}
         reponse={fetchResponse}
         

         />

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
      <Footer></Footer>

    </div>
  );
}

export default App;
