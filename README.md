# angularpro-20180529-2130

https://github.com/javascriptru/angularpro-20180529-2130


Как задавать вопрос:
- групповой чат
- @stepan
- мне лично slack/email


Дополнительные Вопросы:

##### Максим М.

- В случае нескольких приложений на странице (bootstrap нескольких модулей), как лучше организовать взаимодействие между ними? Есть ли механизм вызова changeDetection сразу всех модулей, ведь ChangeDetectorRef, так же как и ApplicationRef у них разный.

- Angular elements / web components - best practices использования, сделать пример.

- PWA на практике. Сделать пример service workers.

- Server side rendering. Сделать пример, можно на node.js.

- Работа с mobile и touch - какие best practices. Hammer.js - много багов, приведу лишь несколько:

  1. Неверная очередь вызова колбеков
  2. Течет память (не очищается при destroy component)
  3. Неверно работает event object (нельзя отловить stopPropagation и т.д.)
  4. Автоматом всем блокам с touch events проставляются стили touch-action: none, которые блокируют работу пользователя с нативными возможностями браузера.
  и т.д.

  Какие альтернативы?


Первое занятие - 5.06