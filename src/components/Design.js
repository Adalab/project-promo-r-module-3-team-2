import '../styles/components/Diseña.scss';
import Palettes from './Palettes';

const Design = (prop) => {
  const handleChange = (event) => {
    prop.handleInput(event.target.value, event.target.name);
    console.log(event.target.name);
  };

  const renderDesign = () => {
    if (prop.designIsOpen === true) {
      return (
        <Palettes 
        designIsOpen = {prop.designIsOpen}
        userpalette = {prop.userpalette}
        handleChange = {handleChange}
        renderDesign = {prop.renderDesign}
        scrollDown = {prop.scrollDown}
        handleToggleDesign = {prop.handleToggleDesign}
        ></Palettes>
      );
    }
  };

  return (
    <fieldset className="design">
      <div
        className="buttonDesign js-designClick"
        onClick={prop.handleToggleDesign}
      >
        <legend className="buttonDesign__title">
          <i className="fa-solid fa-object-ungroup"></i> Diseña{' '}
        </legend>
        <img
          src={prop.scrollDown}
          className={`buttonDesign__arrow js-arrow-design ${prop.arrowRotateDesign}`}
          alt=""
        />
      </div>
      {renderDesign()}
    </fieldset>
  );
};

export default Design;
