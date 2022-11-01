import React from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
// resource: https://www.newline.co/@dmitryrogozhny/quick-introduction-to-internationalization-in-react-with-react-intl--13b17de9
import en from "../languages/en.json";
import ar from "../languages/ar.json";

const messages = { en, ar };

function LangController(props) {
  const lang = useSelector((state) => state.language?.lang);
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      {props.children}
    </IntlProvider>
  );
}

export default LangController;
