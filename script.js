let box = document.getElementById('box')
let stylesLines = ''
let stylesGroups = ''
let windowSize = [document.documentElement.clientWidth, document.documentElement.clientHeight]
let elW = Math.floor(windowSize[0]*0.05)
let elH = Math.floor(windowSize[0]*0.05*1.4065)
let gap = Math.floor(elW / 96 )
if (gap == 0) gap = 1
let groupWidth = Math.floor((windowSize[0]-16)/5)
let groupWMargin =Math.floor( groupWidth - ( gap*2*49 + elW)/2)
let groupHeight= Math.floor((windowSize[1]-16)/2)
let groupHMargin =Math.floor( (groupHeight - ( gap*49 + elH)/2)/2)
let lineWMargin = Math.floor((windowSize[0]- elW - 16)/49)
let lineHMargin = Math.floor((windowSize[1]- elH - 16)/9)
let lineGap = Math.floor((windowSize[0] - (lineWMargin*49+elW+16))/2)
for(let i = 0; i<500; i++){
    let div = document.createElement('div');
    div.id = 'e' + i;
    let group = Math.floor(i/50)
    let line = Math.floor(i/250)
    stylesGroups += '.groups #e' + i + '{transform:translate(' + ((i - 50*group) * gap*2 + group*groupWMargin + groupWMargin - 5*groupWMargin*line) + 'px,' + (i - 50*group + line*groupHMargin*2 + groupHMargin) + 'px)}'
    stylesLines += '.lines #e' + i + '{transform:translate(' + ((i - 50*group)*lineWMargin + lineGap)+'px,' + (group*lineHMargin) + 'px)}'
    //stylesGroups += '.groups #e' + i + '{transform:translate(calc((((('+ (i - 50*group) + ' * (5vw / 48)) + ('+ group + ' * (((100vw - 16px) / 5) - ((((5vw / 48) * 49) + 5vw) / 2)) + (((100vw - 16px) / 5) - ((((5vw / 48) * 49) + 5vw) / 2)) ) - ((5 * (((100vw - 16px) / 5) - ((((5vw / 48) * 49) + 5vw) / 2))) * ' + line + ') ) )))'  + ', calc(('+ (i - 50*group) + ' * (5vw / 96)) + ( (' + line + ' * (((100vh - 16px) / 2) - ((((5vw / 96) * 49) + (5vw * 1.4065)) / 2)) ) + ((((100vh - 16px) / 2) - ((((5vw / 96) * 49) + (5vw * 1.4065)) / 2)) / 2) )) )}'
    //stylesLines += '#click:checked+#box #e' + i + '{transform:translate(calc(' + '('+ (i - 50*group) + ' * (((100vw - 5vw) - 16px) / 49)' + ')' +'), calc(' + group + ' * ((100vh - (5vw * 1.4065) - 16px) / 9)' + '))}'
    box.append(div)
}
let clickFlag = true;
document.head.insertAdjacentHTML('beforeend', '<style>' + stylesGroups + stylesLines + '</style>')
box.addEventListener('click', function() {
    if(clickFlag){
        box.classList.add('lines');
        box.classList.remove('groups');
        clickFlag = false
    }else{
        box.classList.remove('lines');
        box.classList.add('groups');
        clickFlag = true
    }
  })
