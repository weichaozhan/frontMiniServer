/**
 * @description 步骤进度wrapper--ui
 * @author weichaozhan
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './index.less';

class StepsKC extends React.Component {
  static defaultProps = {
    current: 1,
  };

  static propTypes = {
    /**
     * 步骤数组 
     * [{
     *  isError: true|false 步骤是否显示错误样式
     *  text: [String] 步骤说明文本
     * }]
     */ 
    steps: PropTypes.array.isRequired, 
    current: PropTypes.number, // 当前第几步
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render () {
    const {
      steps,
      current,
    } = this.props;

    return (
      <div>
        {/* 圆点 */}
        <div className="steps--custom--store-client wrapper--steps__dot">
          {
            steps.map((item, index) => {
              const wrapperStyle = {
                position: 'relative',
              };

              if (index < steps.length - 1) {
                wrapperStyle.width = `calc(100% / ${steps.length})`;
              }

              return (
                <div key={index} className={classNames('wrapper--step--custom--store-client', {'step-comp-error': item.isError})} style={wrapperStyle}>
                  <div className={classNames('step--custom--store-client', {'step-finished': index < current})}>
                  </div>
                  <i className={classNames({'last-line': index === steps.length - 1, 'line-will-go': index === current - 1, 'line-isgone': index < current - 1})}></i>
                </div>
              );
            })
          }
        </div>
        {/* 说明 */}
        <div className="steps--custom--store-client wrapper--steps__desc">
          {
            steps.map((item, index) => {
              const wrapperStyle = {};

              wrapperStyle.width = `calc(100% / ${steps.length})`;
              // if (index < steps.length - 1) {
              // }

              return (
                <div className={classNames('step-desc', {'step-text-done': index < current, 'step-text-is-error': item.isError})} style={wrapperStyle} key={index}>
                  {item.text && <span>{`${index + 1}.${item.text}`}</span>}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default StepsKC;