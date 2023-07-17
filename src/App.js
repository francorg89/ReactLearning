
import './App.css';
import { Grettings } from './components/Gretting';
import { BusinessList } from "./components/BusinessList";
import { SearchBar } from "./components/SearchBar";

const add1 = {street: "Lerdo de Tejada", number:5, city:"CDMX",zipCode:56615,state:"Mexico" };
const rev1 = {category: "Pizza" , rating:"4.2" , counts:34};
const bizne1 = {name:"Itali Pizza" , image: "https://www.saborusa.com/hn/wp-content/uploads/sites/12/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png" , address: add1, review: rev1 }
const arr = [bizne1, bizne1, bizne1, bizne1, bizne1, bizne1,bizne1,bizne1]

function App() {
  return (
    <div className="App">
      <header>
        <Grettings />
        <p>Testing some doubts about css</p>
      </header>
    <section className="search">
      <SearchBar />
      
    </section>
    <section className="presentation">
        <BusinessList list={arr} />
    </section>
    </div>
  );
}

export default App;
