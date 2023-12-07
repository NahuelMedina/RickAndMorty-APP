import styleAbout from "./About.module.css";
export default function About() {
  return (
    <div className={styleAbout.divAbout}>
      <div>
        <h2>About</h2>
        <h3>
          my{" "}
          <a
            href="https://github.com/NahuelMedina"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </h3>
      </div>
    </div>
  );
}
