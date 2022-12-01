import '../styles/components/MainLanding.scss';

const MainLanding = () => {
  return (
    <main className="principal">
      <section className="made">
        <h1 className="made__title">crea tu tarjeta de visita</h1>
        <p className="made__title--text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </section>

      <section className="Section2">
        <ul className="List">
          <li className="Element1"> Diseña</li>
          <li className="Element2"> Rellena</li>
          <li className="Element3"> Comparte</li>
          <li className="Element4">
            <i className="fa-solid fa-object-ungroup "></i>
          </li>
          <li className="Element5">
            <i className="fa-regular fa-keyboard"></i>
          </li>
          <li className="Element6">
            <i className="fa-solid fa-share-nodes"></i>
          </li>
        </ul>
      </section>

      <section className="btn">
        <a href="./create.html" title="Ir a diseñar" className="btn__link">
          comenzar
        </a>
      </section>
    </main>
  );
};

export default MainLanding;
