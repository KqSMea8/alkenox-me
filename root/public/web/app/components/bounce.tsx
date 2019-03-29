import * as React from 'react';
import * as Bounce from 'react-reveal';



interface IBounce {
  img?: object;
  trigger?: string;

}

class BounceImg extends React.Component {
  render() {
    return (
      <div>
        <Bounce>
          <div className='boxtemp' />
        </Bounce>
      </div>
    );
  }
}

export default BounceImg;
