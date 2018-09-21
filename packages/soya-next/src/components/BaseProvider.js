import React from "react";
import PropTypes from "prop-types";
import { Cookies, CookiesProvider } from "react-cookie";
import { localeShape } from "../constants/PropTypes";
import Locale from "./LocaleContext";

class BaseProvider extends React.Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
    defaultLocale: PropTypes.string,
    siteLocales: PropTypes.arrayOf(PropTypes.string.isRequired),
    locale: localeShape,
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
    this.locale = {
      defaultLocale: props.defaultLocale,
      siteLocales: props.siteLocales,
      locale: props.locale,
    };
  }

  render() {
    return (
      <CookiesProvider cookies={this.props.cookies}>
        <Locale.Provider value={this.locale}>
          {React.Children.only(this.props.children)}
        </Locale.Provider>
      </CookiesProvider>
    );
  }
}

export default BaseProvider;
