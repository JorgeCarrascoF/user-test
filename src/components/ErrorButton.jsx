import { useState } from "react";

const ErrorButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    throw new ReferenceError("Test error from ErrorButton");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      Haz click en el botón para generar un error:
      <button
        style={{ border: "1px solid black", width: "10rem" }}
        onClick={handleClick}
      >
        Error Button
      </button>
      {showMessage && (
        <div
          tyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span>¡Error generado!</span>
          <p>
            Puedes ver el error en la consola. Un log con toda la información
            del error está disponible para ver en <a href="https://pruebas-concepto.vercel.app/dashboard">Buggle</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorButton;
