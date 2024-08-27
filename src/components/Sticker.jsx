import "./Sticker.css";

export default function Sticker({ path, name, updatePath, updateName, current }) {
  return (
    <li onClick={() => {
      current.setState({ currentPath: updatePath, currentName: updateName });
    }}>
      {name}
      <img src={path} alt="sticker" />
    </li>
  );
}
