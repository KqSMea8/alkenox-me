import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, Heading } from 'rebass';

const LabelBlock = props => {
  return (
    <Link exact to={props.link} title={props.label} aria-label={props.label}>
      <Card
        className="relative"
        boxShadow={props.bshadow}
        borderRadius={props.bradius}
        src={props.bgimg}
      >
        <Heading
          className="absolute hoverOverlay"
          fontSize={props.fontSz}
          width={props.width}
          color="inherit"
          textAlign="center"
        >
          {props.label}
        </Heading>

        <Image
          className="hoverImg fitImg"
          borderRadius={props.bradius}
          src={props.bgimg}
          width={props.width}
          height={props.height}
        />
      </Card>
    </Link>
  );
};
export default LabelBlock;
