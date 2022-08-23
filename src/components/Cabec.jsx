import "./cabec.css";

const Cabec = () => {
  return (
    <header className="cabecera">
      <h1 className="cabecera-h1">
        <a href="#" className="cabecera-a">
          <img src="/logo.png" className="logo" alt="clover logo" />
        </a>
      </h1>

      <button className="cabecera-button">
        <svg
          className="cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav className="cabecera-nav">
        <ul className="cabecera-ul">
          <li className="cabecera-li">
            <a href="" className="cabecera-a">
              Item1
            </a>
          </li>
          <li className="cabecera-li">
            <a href="" className="cabecera-a">
              Item2
            </a>
          </li>
          <li className="cabecera-li">
            <a href="" className="cabecera-a">
              Item3
            </a>
          </li>
          <li className="cabecera-li">
            <a href="" className="cabecera-a">
              Item4
            </a>
          </li>
          <li className="cabecera-li">
            <a href="" className="cabecera-a">
              Item5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Cabec;
