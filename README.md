# Резиденты — раздел сайта ИИ-лаборатории Глеба Кудрявцева

Тестовое задание: раздел сайта про закрытую платную ИИ-лабораторию «Резиденты»
для продвинутых практиков. Дизайн снят 1:1 с [glebkudr.com](https://glebkudr.com),
весь продуктовый ресёрч, копирайт и обе живые ИИ-механики сделаны с ИИ.

## Что это

Лендинг закрытого ИИ-сообщества: вход по интервью, дипломный проект среди равных,
принцип вовлечённого участия, два тарифа (Резидент / Наблюдатель). Подробное
**продуктовое обоснование** — в [`docs/PRODUCT.md`](docs/PRODUCT.md).

## Стек

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- Страница пререндерится (SSG), как на сайте Глеба
- Чистый CSS (без UI-фреймворка), визуальный язык снят с glebkudr.com 1:1
- Route handlers для двух API, минимум зависимостей

## Две живые ИИ-механики

1. **Радар недели** — ИИ-агент собрал 5 реальных свежих событий ИИ-фронтира через
   веб-поиск (каждое с источником), рендерится живым терминалом в hero.
2. **ИИ-самооценка** — посетитель пишет, что строит → вердикт резидент / пока рано /
   наблюдатель. Работает через **OpenRouter** (OpenAI-совместимый API). Модель
   настраивается переменной `OPENROUTER_MODEL` (по умолчанию `anthropic/claude-3.5-haiku`).

## Переменные окружения

| Переменная | Назначение |
|------------|-----------|
| `OPENROUTER_API_KEY` | ключ OpenRouter для живой ИИ-самооценки (обязателен для `/api/assess`) |
| `OPENROUTER_MODEL` | модель (опционально, по умолчанию `anthropic/claude-3.5-haiku`) |

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
# прод:
npm run build && npm run start
```

## Docker

```bash
docker build -t rezidenty .
docker run -p 3000:3000 -e OPENROUTER_API_KEY=sk-or-... rezidenty
```

Образ — Next.js standalone (`output: "standalone"`), слушает порт `3000`.
Приём заявок — `app/api/apply` (пишет в `applications.jsonl`; на проде точка
замены на CRM/бота).

## Документы

| Файл | О чём |
|------|-------|
| [`docs/PRODUCT.md`](docs/PRODUCT.md) | Продуктовый бриф и обоснование: ICP, 5 Whys, позиционирование (Dunford), Working Backwards, юнит-экономика, retention, premortem |
| [`docs/COPY.md`](docs/COPY.md) | Тексты лендинга с историей правок |
| [`docs/DESIGN-GLEBKUDR.md`](docs/DESIGN-GLEBKUDR.md) | Дизайн-бриф: токены, снятые с живого glebkudr.com |
| [`docs/STEPPER-SPEC.md`](docs/STEPPER-SPEC.md) | Точная спека степпера, снятая из кода сайта |

## Структура

```
app/            App Router: page.tsx, layout.tsx, api/{assess,apply}
components/      Hero, Stepper, Terminal, Pricing, Faq … (17 компонентов)
app/globals.css визуальный язык (снят с glebkudr.com)
data/           radar.json
public/         фото, ассеты
docs/           продуктовое обоснование
```
