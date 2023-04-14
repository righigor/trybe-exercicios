window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector('.content');
    content.style.backgroundColor = color
    localStorage.setItem('backgroundColor', color);
};
  const setFontColor = (color) => {
  let paragraph = document.querySelectorAll('.paragraph');
  for (let i = 0; i < paragraph.length; i += 1) {
    paragraph[i].style.color = color;
    }
    localStorage.setItem('fontColor', color);
  };
  const setFontSize = (size) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
  };
  const setLineHeight = (height) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.lineHeight = height;
    }
    localStorage.setItem('lineHeight', height);
  };
  const setFontFamily = (family) => {
    let paragraph = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.fontFamily = family;
    }
    localStorage.setItem('fontFamily', family);
  };
 
  let backgroundColorButton = document.querySelectorAll('#background-color > button');
  for (let i = 0; i < backgroundColorButton.length; i += 1) {
    backgroundColorButton[i].addEventListener('click',(event) => {
      setBackgroundColor(event.target.innerHTML);
    })
  };

  let colorFont = document.querySelectorAll('#font-color > button');
  for (let i = 0; i < colorFont.length; i += 1) {
    colorFont[i].addEventListener('click',(event) => {
      setFontColor(event.target.innerHTML);
    })
  };

  let fontSize = document.querySelectorAll('#font-size > button');
  for (let i = 0; i < fontSize.length; i += 1) {
    fontSize[i].addEventListener('click',(event) => {
      setFontSize(event.target.innerHTML);
    })
  };

  let lineHeight = document.querySelectorAll('#line-height > button');
  for (let i = 0; i < lineHeight.length; i++) {
    lineHeight[i].addEventListener('click',(event) => {
      setLineHeight(event.target.innerHTML);
    })
};

  let fontFamilyButton = document.querySelectorAll('#font-family > button');
  for (let i = 0; i < fontFamilyButton.length; i += 1) {
    fontFamilyButton[i].addEventListener('click',(event) => {
      setFontFamily(event.target.innerHTML)
    });
  };

  const inicial = () => {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor !== null) {
      setBackgroundColor(backgroundColor);}
    let textColor = localStorage.getItem('fontColor');
    if (textColor !== null) {
      setFontColor (textColor);
    }
    let fontSize = localStorage.getItem('fontSize');
    if (fontSize !== null) {
      setFontSize (fontSize);
    }
    let fontStyle = localStorage.getItem('fontFamily');
    if (fontStyle !== null) {
      setFontFamily (fontStyle);}
    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight !== null) {
      setLineHeight (lineHeight);
    }
  }
inicial();
}