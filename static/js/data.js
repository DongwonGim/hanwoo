const qnaList = [
  {
    q: '친구들과 횡성한우 맛집에 가면',
    a: [
    { answer: '내가 먹고 싶은걸 당당히 외친다', score : [4, 1, 5, 3, 5, 2, 1, 3] },
    { answer: '숟가락 놓으면서 알아서 시키겠지 한다', score : [2, 5, 1, 3, 1, 4, 5, 3] }
    ]
    },
    {
    q: '마트에서 정육 코너에 가면',
    a: [
    { answer: '저녁 메뉴 레시피를 고려한 고기 선정', score : [1, 3, 4, 5, 3, 2, 5, 1] },
    { answer: '언제가 먹겠지 하며 탕진잼', score : [5, 3, 2, 1, 3, 4, 1, 5] }
    ]
    },
    {
    q: '캠핑 바베큐 파티에서 당신은',
    a: [
    { answer: '집게를 놓지 않는 고굽인', score : [1, 5, 4, 3, 3, 2, 5, 1] },
    { answer: '먹고 수다 떨며 분위기에 취함', score : [5, 1, 2, 3, 3, 4, 1, 5] }
    ]
    },
    {
    q: '누군가 해준 장조림이 너무 짤 때',
    a: [
    { answer: '대놓고 왜이리 짜냐고 불평', score : [3, 1, 5, 2, 4, 3, 1, 5] },
    { answer: '안 볼 때 몰래 물을 더 붓고 좀 더 조림', score : [3, 5, 1, 4, 2, 3, 5, 1] }
    ]
    },
    {
    q: '손님 대접을 위해 맛집을 고를 때',
    a: [
    { answer: '10개 리스트를 놓고 리뷰 분석', score : [5, 3, 2, 5, 1, 4, 3, 1] },
    { answer: 'TV 방영이라고 붙어있으면 그냥 들어감', score : [1, 3, 4, 1, 5, 2, 3, 5] }
    ]
    },
    {
    q: '고깃집에서 옆 테이블이 시끄럽다면',
    a: [
    { answer: '식당이니 좀 조용히 해달라고 말한다', score : [3, 1, 5, 3, 5, 2, 1, 4] },
    { answer: '조용히 처묵처묵하고 나간다', score : [3, 5, 1, 3, 1, 4, 5, 2] }
    ]
    },
    {
    q: '처음 스테이크에 도전하는 당신',
    a: [
    { answer: '유튜브에 스테이크 굽는법을 검색한다', score : [3, 4, 2, 5, 1, 1, 3, 5] },
    { answer: '불은 불이요, 고기는 고기로다. 그냥 굽는다.', score : [3, 2, 4, 1, 5, 5, 3, 1] }
    ]
    },
    {
    q: '투뿔등심을 사온 당신의 요리는',
    a: [
    { answer: '현존하지 않는 저세상 레시피', score : [2, 4, 1, 1, 3, 5, 3, 5] },
    { answer: '무난하고 정갈한 구이요리', score : [4, 2, 5, 5, 3, 1, 3, 1] }
    ]
    },
    {
    q: '어렵게 간 맛집이 금일 마감이라고 할 때',
    a: [
    { answer: '미리 알아놓은 플랜 B로 이동한다', score : [2, 5, 1, 5, 1, 3, 4, 3] },
    { answer: '금방 먹고 가겠다며 떼쓴다', score : [4, 1, 5, 1, 5, 3, 2, 3] }
    ]
    },
    {
    q: '등심과 안심 사이 갈등하는 친구들 사이에서',
    a: [
    { answer: '제 3의 의견, 삼겹살 먹자고 한다', score : [4, 3, 1, 3, 2, 5, 1, 5] },
    { answer: '둘 다 먹자고 하며 의견을 조율한다', score : [2, 3, 5, 3, 4, 1, 5, 1] }
    ]
    },
    {
    q: '받고 싶은 한우 선물 세트는',
    a: [
    { answer: '다양한 부위로 구성된 스페셜 패키지', score : [5, 3, 1, 1, 2, 4, 3, 5] },
    { answer: '맛있는 부위로 단독 구성된 싱글 패키지', score : [1, 3, 5, 5, 4, 2, 3, 1] }
    ]
    },
    {
    q: '정말 맛있는 소고기를 먹었을 때',
    a: [
    { answer: '어쩜 이렇게 맛있냐고 호들갑 떤다', score : [5, 4, 2, 1, 3, 1, 5, 3] },
    { answer: '이게 어떤 부위인지 알아낸다', score : [1, 2, 4, 5, 3, 5, 1, 3] }
    ]
    },
    {
    q: '축산시장에서 한우 가격이 너무 높을 때',
    a: [
    { answer: '많이 샀으니까 만원만 깎아달라고 한다', score : [3, 1, 5, 4, 5, 1, 2, 3] },
    { answer: '칼들고 계시니 조용히 지불하고 나간다', score : [3, 5, 1, 2, 1, 5, 4, 3] }
    ]
    },
    {
    q: '내가 생각할 때 소고기는',
    a: [
    { answer: '등심? 안심? 또 뭐 있더라', score : [3, 1, 2, 5, 1, 5, 3, 4] },
    { answer: '안창, 채끝, 치마, 각종 특수부위 블라블라', score : [3, 5, 4, 1, 5, 1, 3, 2] }
    ]
    },
    {
    q: '오랜만에 연락온 친구가 한우를 사준다면?',
    a: [
    { answer: '한우에 눈이 멀어 일단 나간다', score : [4, 5, 2, 1, 1, 5, 3, 3] },
    { answer: '의심부터 하고 본다', score : [2, 1, 4, 5, 5, 1, 3, 3] }
      ]
    }
]

const infoList = [
  {
    name: '등심'
  },
  {
    name: '안심'
  },
  {
    name: '갈비'
  },
  {
    name: '차돌'
  },
  {
    name: '떡심'
  },
  {
    name: '안창'
  },
  {
    name: '꼬리'
  },
  {
    name: '홍두깨'
  }
]

/*
const infoList = [
  {
    name: '등심',
    nickname : '한우 고유명사',
    desc: '#소고기대명사<br/>#많은사람들이찾음<br/>#어딜가든인기왕<br/><br/>등심은 살코기 함량이 높기 때문에<br/>일반적인 구이용으로 가장 많이 찾습니다.<br/> 즉, 한우 부위 중 가장 인기있죠.<br/><br/>친근하고 정직함, 유머까지 겸비하여<br/>  항상 주변에 사람들이 가득한 당신은<br/>마치 등심같은 사람입니다.<br/>(욕 아님 주의!)'
  },
  {
    name: '안심',
    nickname : '부드러운 식감',
    desc: '#비단결같은부드러움<br/>#담백하고안정적<br/><br/>안심은 운동량이 적은 부위에서 나오기에<br/>한우 부위 중 가장 부드러운 곳입니다.<br/><br/>어떤 상황에서도 온화한 부드러움으로<br/>안정과 조화, 평화를 추구하는 당신!<br/>많은 사람들이 당신을 볼 때<br/>안심된다는 이유가 여기 있지 않을까요?'
  },
  {
    name: '차돌박이',
    nickname : '고소하고 풍부한 육즙',
    desc: '#얇지만단단한지방층<br/>#외유내강<br/><br/>차돌박이는 소고기 중 얇게 썰어 먹지만<br/>쫀득꼬들하며 풍부한 육즙을 자랑합니다<br/><br/>대체로 내향적이고 조용한 성격이지만<br/>모든 일에 있어서 철두철미한 당신!<br/>차돌박이처럼 얇아보이지만<br/>속은 깊은 맛으로 가득찬 사람입니다.'
  },
  {
    name: '갈비살',
    nickname : '뼈에 붙은 깊은 풍미',
    desc: '#살코기와지방의3중주<br/>#강력한풍미<br/><br/>갈비뼈에서 뜯어내고<br/>칼집을 넣어 연하게 하는 고난이 있지만<br/>그 맛만큼은 단연 일품인 갈비살<br/><br/>강한 의지와 굳은 결의로<br/>모든 상황을 용감하게 해결하는 당신은<br/>고난 속에서 더 빛을 발하는<br/>갈비살 같은 사람입니다.<br/>'
  }
]*/