import React from 'react';
import { Helmet } from 'react-helmet';

class Seo extends React.PureComponent {
  render() {
    return (
      <Helmet defaultTitle={this.defTitle}>
        {/* Set site wide header info here and specific overrides in pages */}
        {/* <title>{this.pgTitle}</title> */}
        <meta name="description" content={this.siteDesc} />
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
