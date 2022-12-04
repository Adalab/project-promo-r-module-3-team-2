import '../styles/App.scss';
import Footer from './Footer';
import Landing from './Landing';
import Card from './Card';


function App() {
  // const [user, setUser] = useState({
  //   palette: '1',
  //   name: '',
  //   job: '',
  //   phone: '',
  //   email: '',
  //   linkedin: '',
  //   github: '',
  //   photo: 'http://placekitten.com/g/200/300',
  // });

  // const [designIsOpen, setDesignIsOpen] = useState(true);
  // const [fillIsOpen, setFillIsOpen] = useState(false);
  // const [shareIsOpen, setShareIsOpen] = useState(false);
  // const [arrowRotateDesign, setArrowRotateDesign] = useState('arrowRotate');
  // const [arrowRotateFill, setArrowRotateFill] = useState('');
  // const [arrowRotateShare, setArrowRotateShare] = useState('');
  // const [fetchResponse, setFetchResponse] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  // const handleInput = (inputValue, inputName) => {
  //   // const inputValue = event.target.value;
  //   // const inputName = event.target.name;
  //   setUser({ ...user, [inputName]: inputValue });
  // };

  // const handleReset = (event) => {
  //   event.preventDefault();
  //   setUser({
  //     palette: '1',
  //     name: '',
  //     job: '',
  //     phone: '',
  //     email: '',
  //     linkedin: '',
  //     github: '',
  //   });
  // };
  // const handleClickCreate = (event) => {
  //   //falta comprobar que funciona
  //   event.preventDefault();
  //   localCard(user).then((response) => {
  //     console.log(response);
  //     setFetchResponse(response);
  //   });
  // };

  // const handleToggleDesign = () => {
  //   if (designIsOpen === false) {
  //     setDesignIsOpen(!designIsOpen);
  //     setFillIsOpen(false);
  //     setShareIsOpen(false);
  //     setArrowRotateDesign('arrowRotate');
  //     setArrowRotateFill('');
  //     setArrowRotateShare('');
  //   }
  // };

  // const handleToggleFill = () => {
  //   if (fillIsOpen === false) {
  //     setFillIsOpen(!fillIsOpen);
  //     setShareIsOpen(false);
  //     setDesignIsOpen(false);
  //     setArrowRotateFill('arrowRotate');
  //     setArrowRotateDesign('');
  //     setArrowRotateShare('');
  //   }
  // };

  // const handleToggleShare = () => {
  //   // if (shareIsOpen === false) {
  //   setShareIsOpen(!shareIsOpen);
  //   setFillIsOpen(false);
  //   setDesignIsOpen(false);
  //   setArrowRotateShare('arrowRotate');
  //   setArrowRotateFill('');
  //   setArrowRotateDesign('');
  //   // }
  // };

  return (
    <div>
      <Card></Card>
      {/* <Landing></Landing> */}
      {/* FOOTER */}
      <Footer></Footer>
    </div>
  );
}

export default App;
