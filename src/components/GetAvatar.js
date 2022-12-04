import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/image.png';
// import '../stylesheets/GetAvatar.css';

const GetAvatar = (props) => {
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    console.log('La usuarioa ha abierto la ventana para elegir fichero');
    console.log('La usuaria ha elegido los ficheros', ev.currentTarget.files);
    console.log(
      'El primero de los ficheros elegidos es',
      ev.currentTarget.files[0]
    );
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;

  return (
    <div className="fill__action ">
      <label
        htmlFor="imageForm"
        className="fill__infoLabel fill__action--labelInput"
      >
        Añadir imagen
      </label>
      <input
        ref={myFileField}
        type="file"
        accept="image/*"
        className="fill__infoInput fill__action--imageInput js_input_img js__profile-upload-btn js_inputReset"
        id="imageForm"
        name="img"
        onChange={uploadImage}
      />
      <div
        className="fill__action--preview js__profile-preview"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
};
GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};
export default GetAvatar;
