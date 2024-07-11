## Запуск

1. Клонуйте репозиторій:
   ```bash
   git clone <https://github.com/annaholovach/test-task.git>
2. Запустіть Docker:
    ```bash
   docker build -t test-task . docker run -p 3000:3000 test-task
Команди docker створять тестові дані для роботи з ними та запустять апі.

## Запуск без докеру

1. Клонуйте репозиторій:
   ```bash
   git clone <https://github.com/annaholovach/test-task.git>
2. Дозвольте виконання файлів entrypoint та generate.mock :
    ```bash
   chmod +x generate.mock.sh
   chmod +x entrypoint.sh
3. Запустіть апі 
     ```bash
   ./entrypoint.sh

Вказані в entrypoint команди створять тестові дані для роботи з ними та запустять апі.

## Обмеження 

### Ця демонстраційна система має обмеження на кількість оголошень:

- У псевдо БД зберігається лише 10 оголошень.
- Запити на отримання або оновлення статистики для оголошень з ідентифікатором більше 10 будуть повертати помилку.
- Це обмеження застосовується задля демонстрації реалістичної роботи з даними та уникнення неочікуваної поведінки додатку.

## Використання
### Отримати загальну статистику
Отримати загальну статистику для певного оголошення з autoId:

- URL: /statistics/:autoId
- Метод: GET
- Приклад запиту
   ```bash
  curl http://localhost:3000/statistics/1

### Оновити статистику переглядів
Оновити статистику переглядів певного оголошення з autoId:

- URL: /statistics/listing
- Метод: POST
- Приклад запиту 
   ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"autoId": 1}' http://localhost:3000/statistics/listing
  ```

### Оновити статистику переглядів номеру власника
Оновити статистику переглядів номеру телефону власника певного оголошення з autoId:

- URL: /statictics/phone
- Метод: POST
- Приклад запиту 
   ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"autoId": 1}' http://localhost:3000/statistics/phone
  ```

