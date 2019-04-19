import React from 'react';
import IconInfo from '../../../../../assets/images/ic-info.svg';
import IconDoc from '../../../../../assets/images/ic-terms-doc.svg';
import './DetailContainer.scss';

const DetailContainer = (props) => {
  return(
    <>
      <div className="DetailContainer">
        <div className="row">
          <div className="col-lg-6">
            <div className="flexbox">
              <img src={props.icon} alt="icon" className="icon"/>
              <img src={IconInfo} alt="info"/>
              <p>
                <a href={props.titleLink} target="_blank" rel="noopener noreferrer">{props.title}</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flexbox -space">
              <div className="text-wrapper">
              <h4><a href={props.titleLink} target="_blank" rel="noopener noreferrer">{props.type}</a></h4>
              <p className="-light"><a href={props.actionLink} target="_blank" rel="noopener noreferrer">{props.action}</a></p>
              </div>
              <button><img src={IconDoc} alt="doc"/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default  DetailContainer;
