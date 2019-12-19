import React, { Component } from "react";
import { loadGetInitialProps } from "next-server/dist/lib/utils";
import ReactGa from "react-ga";

export default () => Composed =>
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount() {
      console.log("PAGE VIEW");

      ReactGa.initialize("id_analytics");
      ReactGa.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />;
    }
  };
