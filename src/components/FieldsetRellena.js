
const FieldsetRellena = (props) => {

    const errorPhoneText = (errorMsg) => {
        if (props.errorPhone) {
          return errorMsg;
        }
      };
    
      const errorEmailText = (errorMsg) => {
        if (props.errorEmail) {
          return errorMsg;
        }
      };
    
    const renderFill = (props) => {
        
        if (props.fillState === true) {
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
                value={props.valueName}
                onInput={props.event}
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
                value={props.valueJob}
                onInput={props.event}
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
                value={props.valueEmail}
                onInput={props.event}
              />
              <small className="fill__small js-small-text">
                {' '}
                {errorEmailText('El email que has introducido no es correcto.')}
              </small>
    
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
                value={props.valuePhone}
                onInput={props.event}
              />
              <small className="fill__small js-small-text">
                {' '}
                {errorPhoneText('El teléfono que has introducido no es correcto.')}
              </small>
    
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
                value={props.valueLinkedin}
                onInput={props.event}
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
                value={props.valueGithub}
                onInput={props.event}
              />
            </div>
          );
        }
      };
    
    return (
        <fieldset>
        <div className="buttonFill js-fillClick" onClick={props.eventClick}>
          <legend className="buttonFill__title">
            <i className="fa-regular fa-keyboard"></i>Rellena
          </legend>
          <img
            src={props.src}
            className={`buttonFill__arrow js-arrow-fill ${props.arrowState}`}
            alt=""
          />
        </div>
        {renderFill(props)}
      </fieldset>
    );
    
};


export default FieldsetRellena;
