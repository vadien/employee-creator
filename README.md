# Employee Creator

![workflow badge](https://github.com/vadien/REPO-NAME/actions/workflows/REPO-FILENAME.yaml/badge.svg)

## Demo

TBD!

---

## Requirements / Purpose

A full stack application to manage a database of employee information.

- Requirements:
  - React/TypeScript frontend, using Redux and React Query.
  - Java/Spring backend.
  - Implement API logging.
  - Implement error handling.

---

## Build Steps

TBD!

---

## Design Goals / Approach

---

## Features

---

## Known issues

---

## Future Goals

---

## Change logs

### 2024-09-18

- Fixed error preventing new employee creation when `currentEmployee = true` (see Challenges below)

### 2024-09-17

- Add employee card view/edit/delete functionality
- Created new employee form
- Adjusted schema validation
- Added frontend API calls using React Query

### 2024-09-16 - Frontend information display

- Created employee page, card, loaders

### 2024-09-11 - Frontend CRUD development

- Added React testing suite

### 2024-09-10 - Backend CRUD development

- Implemented Create/Read methods
- Created simple exception handler
- Created first passing tests

### 2024-09-09 - Initialization

- Created project and installed dependencies

---

## Challenges

- Working with dates in forms has been interesting, I can see why many forms don't use text format for date entry. My form had an issue with the `endDate` field passing "Invalid Date" when the field was hidden, due to using `valueAsDate` in React Hook Form. I fixed this by using `useEffect` with Hook Form's `watch` function to manually unset the field when it is hidden.

---

## Licensing Details

MIT License

Copyright (c) 2024 David Neill

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
