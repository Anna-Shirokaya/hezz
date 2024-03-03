      const apiUrl = 'https://api-prod.hezzl.com/gw/v1/game/145602/init';
      const data = {
        email: 'test@hezzl.com',
      };
  
      const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    
    //функция для получения статуса ответа
      async function fetchStatus() {
      const status = await (await fetch(apiUrl, requestOptions)).status;
      return status;
      }
//Метод Init Сервер отдал статус 200
    test('Метод Init - Статус код 200', () => {
      return fetchStatus().then(status => {
        expect(status).toBe(200);
      });
    });

    
    //функция для получения параметра
async function fetchData() {
  const status = (await (await fetch(apiUrl, requestOptions))).json();
  return status;
  }
    //Проверяем наличие параметра data в ответе   
    test('Метод Init - параметра data есть в ответе', () => {
      return fetchData().then(status => {
         expect(status).toHaveProperty('data');
  });
});
  
    //Проверяем наличие параметра auth в data в ответе   
    test('Метод Init - параметра auth в data есть в ответе', () => {
      return fetchData().then(status => {
         expect(status.data).toHaveProperty('auth');
  });
});
