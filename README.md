# Tinkoff-22-04-2023

[https://mihinov.github.io/tinkoff-22-04-2023/](https://mihinov.github.io/tinkoff-22-04-2023/)
По ссылке не работает сервер (json-server нельзя запускать в gh-pages)

Проект запускался на Node.js 18.6.0

Чтобы запустить проект, нужно:
1. Запустить в терминале `npm i`
2. Запустить в терминале `npm run start:all`

Структура проекта:

- db.json - файл фейковой JSON БД
- /app/animations - некоторые angular анимации
- /app/components - компоненты, которые сильно не зависят от чего-то, общие компоненты
- /app/interfaces - файл/файлы с интерфейсами
- /app/layouts - компонент, выводящий основную структуру сайта (header, main, footer), от этого компонента/компонентов всё идёт
- /app/pages - компоненты, которые меняются внутри тега main

