/*const header = document.getElementById('header');*/
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 15;
const select = [];
let qIdx = -1;

const sumOfArrays = (Array1,Array2) => {
  var Total = [];

  for( var i = 0; i < Array1.length; i++)
  {
      Total.push(Array1[i]+Array2[i]);
  }

  return Total
}

const goTo = (dest) => {
  let elem;
  let elemTop;
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  window.open('http://www.xn--oi2b37p54dvpag5ag2ag4zbupsvc.com/online_market.php');
}

const calcScore = () => {
  let point = [0,0,0,0];
  for (let i = 0; i < ENDPOINT; i++) {
    point= sumOfArrays(point, qnaList[i].a[select[i]].score);
  }
  return point;
}

const sortResult = (point) => {
  {
  num = point.indexOf(Math.max.apply(null, point));
  } 
  return num;
}

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  const point = calcScore();
  const grade = sortResult(point);
  const pTitle = document.querySelector('.p');
  const img_url = 'static/img/result-' + grade + '.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
/*  const nickname = document.querySelector('.nickname')
  const desc = document.querySelector('.res');*/

  
  res_img.src = img_url;
  res_img.alt = infoList[grade].name;
  res_img.title = infoList[grade].name;
  res_img_div.appendChild(res_img);
  /*animal.innerHTML = infoList[grade].name;*/
  /*nickname.innerHTML = infoList[grade].nickname;*/
  /*desc.innerHTML = infoList[grade].desc;*/

  setTimeout(() => {
   /* header.style.display = 'block'; */
    footer.style.display = 'block';
    result.style.display = 'block';
    /* header.style.animation =*/
      'fade-in 0.3s forwards';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'none';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === qnaList.length - 1) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = ((100/ENDPOINT) * (qIdx + 1)) + '%';
  q.innerHTML = qNum.q;
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  /*header.style.animation =
    'going-up 0.4s forwards, ' +
    'fade-out 0.4s forwards';*/
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    /*header.style.display = 'none';*/
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const start_btn = document.querySelector('.start');
  start_btn.addEventListener('click', ()=>{
    start_btn.style.backgroundColor = 'red';
    start_btn.style.color = 'white';
    start_btn.disabled = true;
    begin();
  
  });

/*
  u_name.addEventListener('blur', () => {
    try {
      if (u_name.value.length < 0) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
    } catch (err) {
      msg.innerHTML = err;
    }
  });
  

 start_btn.addEventListener('click', () => {
  try {
    if (u_name.value.length < 0) {
      throw '이름을 입력하고 시작해 주세요.';
    }
    msg.innerHTML = '';
    start_btn.disabled = true;
    begin();
  } catch (err) {
    msg.innerHTML = err;
  }
});
*/
}

window.onload = load();