import React from "react";

const Logo = () => {
  return (
    <div className="Logo">
      {/* Les images importées depuis la balise img sont accessibles dans "public" */}
      {/* On saisit le chemin comme si on était dans "public" */}
      <img src="./assets/img/logo.png" alt="logo" />
      <h3>Worldmeter</h3>
    </div>
  );
};

export default Logo;
