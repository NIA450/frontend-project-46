### Hexlet tests and linter status:
[![Actions Status](https://github.com/NIA450/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/NIA450/frontend-project-46/actions)

# nodejs-package

[![Node CI](https://github.com/hexlet-boilerplates/nodejs-package/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-boilerplates/nodejs-package/actions)
<a href="https://codeclimate.com/github/NIA450/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/df5e57312bf5c7eb1923/maintainability" /></a>
[![Test Coverage](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/test_coverage)](https://codeclimate.com/github/hexlet-boilerplates/nodejs-package/test_coverage)

# Gendiff
## Установка

## Пример использования
Для сравнения двух YAML файлов выполните следующую команду:
gendiff filepath1.yml filepath2.yml

Это вернет различия между двумя файлами в формате:

{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}

