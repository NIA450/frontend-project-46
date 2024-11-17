#!/usr/bin/env node

import { Command } from "commander";
import gendiff from "../src/gendiff.js";

const program = new Command();

program
  .version("0.0.3")
  .description("Compares two configuration files and shows a difference.")
  .argument("<filepath1>", "path to first file")
  .argument("<filepath2>", "path to second file")
  .option("-f, --format <type>", "output format", "stylish") // Установка stylish как формат по умолчанию
  .helpOption("-h, --help", "output usage information")
  .action((filepath1, filepath2) => {
    const options = program.opts(); // Получаем опции
    const format = options.format; // Используем установленный формат
    const diff = gendiff(filepath1, filepath2, format);
    console.log(diff);
  });

// Парсинг аргументов командной строки
program.parse(process.argv);