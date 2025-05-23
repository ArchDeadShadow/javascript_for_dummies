# Выполнение JavaScript в окне браузера

## Использование JavaScript в атрибутах событий HTML-элементов

HTML предоставляет специальные атрибуты для запуска JavaScript при наступлении определённых событий или действий пользователя.  
Пример HTML-кнопки с обработчиком клика:

```html
<button id="bitButton" onclick="alert('Привет, мир!');">Щелкните здесь</button>
```

### Основные атрибуты событий

| Атрибут       | Условие запуска сценария                                                   |
| ------------- | -------------------------------------------------------------------------- |
| `onload`      | Окончание загрузки страницы                                                |
| `onfocus`     | Получение элементом фокуса ввода (например, при активации текстового поля) |
| `onblur`      | Потеря элементом фокуса ввода (например, при щелчке вне поля)              |
| `onchange`    | Изменение значения элемента                                                |
| `onselect`    | Выделение текста                                                           |
| `onsubmit`    | Отправка формы                                                             |
| `onkeydown`   | Нажатие клавиши                                                            |
| `onkeypress`  | Нажатие и последующее отпускание клавиши                                   |
| `onkeyup`     | Отпускание клавиши                                                         |
| `onclick`     | Щелчок мышью по элементу                                                   |
| `ondrag`      | Перетаскивание элемента                                                    |
| `ondrop`      | Вставка перетаскиваемого элемента                                          |
| `onmouseover` | Наведение указателя мыши на элемент                                        |

---

## Использование JavaScript в элементе `<script>`

HTML-элемент `<script>` позволяет внедрить код JavaScript непосредственно в HTML-документ:

```html
<script>
  // Здесь размещается код JavaScript
</script>
```

### Где размещать `<script>`

Ранее скрипты размещались в `<head>`, но сейчас их можно размещать как в `<head>`, так и в `<body>`.  
Чтобы скрипт исполнился после загрузки всей страницы, его либо помещают в конец HTML-документа, либо используют событие `onload`:

```html
<body onload="initFunction()"></body>
```

---

## Ограничения JavaScript в `<script>`

Хотя использование `<script>` предпочтительнее, чем атрибуты событий, у него есть ограничения:

- Скрипт доступен только той странице, где он расположен;
- Для многократного использования скрипта его нужно копировать во все HTML-страницы вручную, что затрудняет поддержку.

---

## Когда использовать встроенные `<script>`

Этот подход подходит для:

- Коротких, редко изменяемых скриптов;
- Одностраничных приложений.

Однако старайтесь минимизировать использование JavaScript напрямую в HTML — это упрощает поддержку и структурирование кода.

---

## Включение внешних JavaScript-файлов

Наиболее распространённый способ подключения JavaScript — использование внешних файлов:

```html
<script src="myScript.js"></script>
```

### Преимущества внешних файлов:

- HTML становится более читаемым;
- Упрощается сопровождение — изменения в одном месте.

---

## Комментирование кода

Комментарии в JavaScript игнорируются интерпретатором и предназначены только для разработчиков.

### Однострочные комментарии

Начинаются с `//` и действуют до конца строки:

```js
// Это однострочный комментарий
```

### Многострочные комментарии

Открываются `/*` и закрываются `*/`. Используются для более объёмных пояснений:

```js
/*
  Это многострочный
  комментарий
*/
```
