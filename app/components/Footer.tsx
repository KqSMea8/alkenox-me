import * as React from "react";

interface IFooter {
  copyright: string;
  symbol: string;
  year: number;
  company: string;
  rights: string;
}

export default class Footer extends React.Component<IFooter> {
  constructor(props: IFooter) {
    super(props);
  }

  public render() {
    return (
      <span>
        {this.props.copyright} {this.props.symbol} {this.props.year}{" "}
        {this.props.company} {this.props.rights}
      </span>
    );
  }
}
