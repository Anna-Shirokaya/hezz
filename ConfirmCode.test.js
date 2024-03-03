

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

async function fetchaccessToken3() {
    const response11 = (await (await fetch(apiUrl1, requestOptions1)).json()).accessToken;
    const data3 = {
        code: '123456',
    };
    const requestOptions3 = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': response11,
       },
        
      body: JSON.stringify(data3),
      };
   
    const status5 = await (await fetch(apiUrl2,requestOptions3)).status;
    return status5;
   
}
       //Метод ConfirmCode Статус 200
       test('Метод ConfirmCode - Статус код успешный', () => {
        return fetchaccessToken3().then(Status5 => {
           expect(Status5).toBe(200);
         });
      });
//время
      test('Метод ConfirmCode - Скорость ответа от сервера менее 200ms', () => {
        startTime = performance.now();
        return fetchaccessToken3().then(Status5 => {
                  
                expect(performance.now() - startTime).toBe(200);
            });
         });
