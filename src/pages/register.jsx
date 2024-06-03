import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FromRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
