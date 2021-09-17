const url = 'https://syoon0624.github.io/json/test.json';

const costObj = new XMLHttpRequest(); //요청하는 프로그램 받아오기
costObj.open('GET', url); // GET요청방식과 주소 세팅
costObj.responseType = 'json'; // 받아올 파일 형식 json
costObj.send(); // 보내기
costObj.addEventListener('load', list); // 요청오나 안오나 감지하는 장치 설치

function list() { // 요청이 오면 list가 실행됨
    const buy = costObj.response;//buy로 데이터를 받아옴. costObj.response;에 결과가 담김.
    console.log(buy);//buy확인
}

let data, income, classify, history, price; //값 초기화

for(i=0; i<bankList.length; i++){
    date = bankList[i]['date'];
    income = bankList[i]['income'];
    classify = bankList[i]['classify'];
    history = bankList[i]['history'];
    price = bankList[i]['price'];
}



