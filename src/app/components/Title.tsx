import { FaSearch, FaBars } from "react-icons/fa";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="clothes">
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
        />
          <FaBars />
      </div>
    </>
  );
};

export default Title;
