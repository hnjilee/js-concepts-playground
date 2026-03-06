// Fetch: JS에서 네트워크 요청을 보내는 방법(Web API)

// 성공
fetch('data.json') // 데이터를 요청함
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error - Status: ${response.status}`);
    }
    return response.json(); // 응답을 받아서 JSON을 객체로 변환함
  })
  .then(data => console.log(data)); // {name: 'Kim'}

// 실패
fetch('ata.json') // 잘못된 파일명의 데이터를 요청함
  .then(response => {
    if (!response.ok) {
      // 응답의 상태 코드가 2xx가 아니면 에러를 던짐
      throw new Error(`HTTP Error - Status: ${response.status}`);
    } // HTTP Error - Status: 404
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error.message));
