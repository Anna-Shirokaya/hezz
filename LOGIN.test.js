// КОЛЛЕКЦИЯ LOGIN
const apiUrl1 = 'https://api-prod.hezzl.com/auth/v1/game/145602/check-login';
const apiUrl2 = 'https://api-prod.hezzl.com/auth/v1/game/145602/confirm-code';

const data1 = {
    login: 'test@hezzl.com',
};
const requestOptions1 = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data1),
  };

//функция для получения статуса ответа
async function fetchStatus1() {
    const status1 = await (await fetch(apiUrl1, requestOptions1)).status;
    return status1;
}

//Метод CheckLogin - Сервер отдал статус 200
test('Метод CheckLogin - Статус код успешный', () => {
    return fetchStatus1().then(status1 => {
      expect(status1).toBe(200);
    });
  });

//Проверяем, что скорость ответа от сервера менее 200ms Метод CheckLogin

async function fetchTime1() {
  const statusTime = await fetch(apiUrl1, requestOptions1);
  return statusTime;
}

test('Метод CheckLogin - Скорость ответа от сервера менее 200ms', () => {
  startTime1 = performance.now();
  return fetchTime1().then(Response => {
    expect(performance.now() - startTime1).toBe(200);
});
});





    