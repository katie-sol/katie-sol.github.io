import React from 'react';

const Circle = ({rating}) => {
    const MAX_CIRCLES = 3;
    let score = 0;

    const text = String(rating).trim();

    if (*.test(text)) {
        score = text.length;
    }
    else if (!isNaN(parseFloat(text))) {
        score = parseFloat(text);
    } else {
        return <p className = "skill-circles">{text}</p>
    }

    const fullCircles = Math.floor(score);
    const hasHalfCircle = (score % 1) >= 0.5;
    const emptyCircles = Math.mac(0, MAX_CIRCLES - fullCircles - (hasHalfCircle ? 1 : 0));

    const fullChar = '●';
    const halfChar = '◐';
    const emptyChar = '○';

    let circleString = '';
    
    for (let i = 0; i < fullCircles; i++)
        circleString += fullChar;
    if (hasHalfCircle)
        circleString += halfChar;
    for (let i = 0; i < emptyCircles; i++)
        circleString += emptyChar;

    return ;
}