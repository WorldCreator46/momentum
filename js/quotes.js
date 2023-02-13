const quotes = [
  {
    quote: "친구는 기쁨을 두 배로 만들고 슬픔은 반으로 줄인다.",
    author: "실러",
  },
  {
    quote: "지나간 슬픔에 새 눈물을 낭비하지 마라",
    author: "에우리피데스",
  },
  {
    quote: "성실한 한마디의 말은 백만 마디의 헛된 찬사보다 낫다.",
    author: "카네기",
  },
  {
    quote: "거짓말은 그 자체가 죄일 뿐 아니라 정신을 더럽힌다.",
    author: "플라톤",
  },
  {
    quote: "어리석은 사람은 자기 혓바닥을 억제하지 못한다.",
    author: "초서",
  },
  {
    quote: "눈물 속에서는 갈 길을 못 본다.",
    author: "윌리엄 베넘",
  },
  {
    quote: "구두쇠는 항상 빈곤하다.",
    author: "호라티우스",
  },
  {
    quote: "역경은 청년에게 있어서 빛나는 가치이다.",
    author: "에머슨",
  },
  {
    quote: "일찍 일어나는 새가 벌레를 잡는다.",
    author: "캠던",
  },
  {
    quote: "훌륭한 말은 훌륭한 무기이다.",
    author: "풀러",
  },
  {
    quote: "이기주의는 모든 사람의 눈 속에 있는 티끌이다.",
    author: "레이",
  },
  {
    quote: "형제는 영원한 형제다.",
    author: "키블",
  },
  {
    quote: "고통 뒤의 즐거움은 달콤하다.",
    author: "존 드라이든",
  },
  {
    quote: "산에 걸리지 않고 개미집에 걸린다.",
    author: "한비자",
  },
  {
    quote: "나에게 필요한 것이 남에게는 더 절실할 수도 있다.",
    author: "시드니",
  },
  {
    quote: "그 사람을 알고 싶으면 그의 친구를 보라",
    author: "공자",
  },
  {
    quote: "불행의 원인은 늘 나 자신에게 있다.",
    author: "파스칼",
  },
  {
    quote: "비가 온 다음에는 맑은 날씨가 된다.",
    author: "이솝",
  },
  {
    quote: "남에게, 또 남의 일에 대해서 말을 삼가라",
    author: "필딩",
  },
  {
    quote: "학식도 미덕도 건강이 없으면 퇴색한다.",
    author: "몽테뉴",
  },
  {
    quote: "가장 학식 있는 사람이 가장 현명한 사람은 아니다.",
    author: "라블레",
  },
  {
    quote: "크게 성공한 사람은 그 성공에 비례할 만큼의 큰 노력이 숨어 있다.",
    author: "로렌스",
  },
  {
    quote: "노여움에서 때때로 큰 재난이 생긴다.",
    author: "이솝",
  },
  {
    quote: "자기의 이익을 위해 친구를 사귀는 것은 좋지 않다.",
    author: "앙드레 모루아",
  },
  {
    quote: "선을 행하는 데는 생각이 필요 없다.",
    author: "괴테",
  },
  {
    quote: "가장 바쁜 사람이 가장 많은 시간을 갖는다.",
    author: "비네",
  },
  {
    quote: "나태라는 어머니는 강도라는 아들과 굶주림이라는 딸을 가지고 있다.",
    author: "빅토르 위고",
  },
  {
    quote: "책은 세계의 보물이며, 후세와 국민이 상속받기 알맞은 재산이다.",
    author: "소로",
  },
  {
    quote:
      "단 한 사람의 고귀한 친구조차 갖지 못한 사람은 사는 값어치가 없는 사람이다.",
    author: "데모크리스토스",
  },
  {
    quote:
      "한마디의 말로 하는 타격이 칼로 한번 휘두르는 것보다 더 깊이 찌른다.",
    author: "버턴",
  },
  {
    quote: "궁핍은 영혼과 정신을 낳고 불행은 위대한 인물을 낳는다.",
    author: "빅토르 위고",
  },
  {
    quote:
      "정직한 사람이 없다고 말하는 사람이야말로 가장 정직하지 못한 사람이다.",
    author: "조지 버클리",
  },
  {
    quote: "부자의 큰 행복은 남을 도울 수 있다는 것이다.",
    author: "라 르뷔에르",
  },
  {
    quote: "자식을 길러본 후에야 부모의 마음을 안다.",
    author: "왕양명",
  },
  {
    quote:
      "책사(서점)도 학교다 책은 교사다 책사는 더 무서운 학교요 책은 더 무서운 교사다.",
    author: "안창호",
  },
  {
    quote:
      "진정으로 신을 사랑하는 자는 신에게 자신을 사랑해달라고 하지 않는다.",
    author: "스피노자",
  },
  {
    quote: "부지런하면 재물이 생기고 이끼면 가난하지 않다.",
    author: "이익",
  },
  {
    quote: "책 없는 방은 영혼 없는 육체와 같다.",
    author: "키케로",
  },
  {
    quote: "앉아 있는 신사보다 서 있는 농부가 훌륭하다.",
    author: "프랭클린",
  },
  {
    quote: "하나의 선행은 다른 선행을 부른다.",
    author: "헤이우드",
  },
  {
    quote: "당사자가 둘이 있을 때 한쪽 말만 듣는 사람은 반쪽만 들은 것이다.",
    author: "아이스킬로스",
  },
  {
    quote:
      "최고로 행복한 구두쇠란 자기가 아는 친구를 전부 저축할 수 있는 사람이다.",
    author: "셔우드",
  },
  {
    quote: "보리가 싹을 틔우기 위해서 씨는 죽어야 한다.",
    author: "간디",
  },
  {
    quote: "성공의 비결은 좌절하지 않고 극복하는 데 있다.",
    author: "발자크",
  },
  {
    quote: "하느님은 평범한 생김새의 사람을 좋아한다.",
    author: "링컨",
  },
  {
    quote: "모욕은 모욕당했다고 여기는 그 자체가 문제이다.",
    author: "에픽테토스",
  },
  {
    quote: "시간은 흘러가 버리지만 한번 입 밖에 낸 말은 그대로 남는다.",
    author: "톨스토이",
  },
  {
    quote: "오늘 할 수 있는 일에 최선을 다해라",
    author: "뉴턴",
  },
  {
    quote: "인내는 만족의 열쇠이다.",
    author: "마호메트",
  },
  {
    quote: "하늘은 행동하지 않는 사람을 절대로 돕지 않는다.",
    author: "소포클레스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
