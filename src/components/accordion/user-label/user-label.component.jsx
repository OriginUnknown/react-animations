import React from 'react';
import './user-label.component.scss';

const userLabel = (props) => {
    let animateCaret = ((props.customise.caret) && props.customise.caret.animate) ? 'animate-on-open-caret' : '';

    const showCaret = (props.customise.content.showCaret) ? 
        (
            <span className={`caret ${animateCaret}`} onClick={ props.onToggleUserDetailsView }></span>
        ) : null ;
    
    const styles = () => {
        let cssStyles = '';
        if(props.customise.content.showCaret) {
            cssStyles += ' with-caret'
        }
        if (props.customise.cssStyleKeys) {
            cssStyles += props.customise.cssStyleKeys.map( (styleKey) => {
                if (styleKey === 'upperCaseLabels') {
                    return ' to-uppercase';
                }
                if (styleKey === 'boldText') {
                  return ' bold'
                }
            }).join(' ');
        }
        return cssStyles;
    };

    return (
        <div className={ 'user-labels' + styles() }>
            <div class='user-checkbox-label'>
                <input type='checkbox' id={ props.customise.checkbox.id } />
                <label for={ props.customise.checkbox.id }>{ props.customise.checkbox.name }</label>
            </div>
            <p>{ props.customise.content.caption.forPara1 }</p>
            <p>{ props.customise.content.caption.forPara2 }</p>
            { showCaret }
        </div>
    )
};

export default userLabel;