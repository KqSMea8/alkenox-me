import * as React from "react";
import { Helmet } from "react-helmet";

interface ISeo {
  defTitle?: string;
  siteDesc?: string;
}

class Seo extends React.Component<ISeo> {
  constructor(props: ISeo) {
    super(props);
  }

  public render() {
    return (
      <Helmet defaultTitle={this.props.defTitle}>
        {/* Set site wide header info here and specific overrides in pages */}
        {/*<title>{this.props.pgTitle}</title>*/}
        <meta name="description" content={this.props.siteDesc} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>
    );
  }
}
export default Seo;
