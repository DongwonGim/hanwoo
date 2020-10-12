
const url = 'http://13.125.116.49:5000/';
const title = '[횡성한우] 나와 어울리는 한우 부위는?';
const hash = '%23횡성한우축제 %23횡성한우성격유형검사 %23성격유형검사 ';


const fb = () => {
  document.getElementsByClassName('fb')[0].style.backgroundImage = "url('static/img/facebook_1.png')";
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url + '&t=' + title + '\n' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const tw = () => {
  document.getElementsByClassName('tw')[0].style.backgroundImage = "url('static/img/twitter_1.png')";
  let name = document.getElementsByTagName('img')[1].alt;
  switch (name) {
    case '차돌박이':
      name += '에요! ';
      break;
    case '갈비':
      name += '에요! ';
      break;
    case '꼬리':
      name += '에요! ';
      break;
    case '홍두깨':
      name += '에요! ';
      break;
    default:
      name += '이에요! ';
  }
  window.open('https://twitter.com/intent/tweet?text='
    + title + '%0A' + '저는 ' + name + '\n' + hash + '%0A' + url,
    'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const nv = () => {
  document.getElementsByClassName('nv')[0].style.backgroundImage = "url('static/img/naver_1.png')";
  window.open('http://share.naver.com/web/shareView.nhn?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
/*
const band = () => {
  window.open('https://band.us/plugin/share?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
*/

