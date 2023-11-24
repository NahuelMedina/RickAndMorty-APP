import styleError from "./Error.module.css";
export default function Error() {
  return (
    <div>
      <img
        className={`${styleError.img}`}
        src="/src/assets/RickAndMorty-Error.png"
        alt=""
      />
    </div>
  );
}
