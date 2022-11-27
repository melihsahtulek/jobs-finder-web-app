import { MdDarkMode } from "react-icons/md";
import Container from "components/Container";

const Header = () => {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="font-bold uppercase">example project</h1>
          <div>
            <MdDarkMode className="text-slate-700 text-3xl" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
