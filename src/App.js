import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = () => {
    const fullName = "Bilel Saida";
    alert(`Name: ${fullName}`);
  };

  return (
    <div className="App">
      <main>
        <Profile
          fullName="Bilel Saida"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          profession="Développeur de logiciels"
          handleName={handleName}
        >
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-19/344555381_549262797399982_471199601846557651_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=aiX8Pj4snhcAX_1riwv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAlv2DWJibCcZlnC-CSoxBYdhDmpXS-4rU3zvHiaB8aAw&oe=6495E7EC"
            alt="Profile"
          />
        </Profile>
      </main>
    </div>
  );
}

export default App;
