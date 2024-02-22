// var element = document.getElementById('myElement');
// var oldValue = element.getAttribute('style');
// var newValue = oldValue.replace('--my-var: старое значение', '--my-var: новое значение');
// element.setAttribute('style', newValue);
var sheet = document.styleSheets[0];
sheet.cssRules[0].style.setProperty('--count', 'новое значение');
// var count = "5"
// document.documentElement.style.setProperty('--count', element);

print(sheet)