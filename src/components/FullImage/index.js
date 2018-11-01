import styles from './style.less';

import React,{PureComponent} from 'react';

export default class FullImage extends PureComponent{

  render(){
    return (
      <div className={styles.reactFullImage} onClick={this.props.hideFullImage}>
        <img src={this.props.src} style={{display: 'block', maxHeight: `${document.body.offsetHeight}px`}} />
      </div>

    );
  }
}
