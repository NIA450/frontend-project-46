#!/usr/bin/env node

import { Command } from "commander";
import gendiff from "../src/gendiff.js"

const program = new Command();

program
  .version("0.0.3")
  .description("Compares two configuration files and shows a difference.")
  .argument("<filepath1>", "path to first file")
  .argument("<filepath2>", "path to second file")
  .option("-f, --format <type>", "output format")
  .helpOption("-h, --help", "output usage information")
  .action((filepath1, filepath2) => {
    const options = program.opts(); // Получаем опции
    const format = options.format || "default"; // Установка значения по умолчанию
  const diff = gendiff(filepath1, filepath2);
  console.log(diff);
  });

// Парсинг аргументов командной строки
program.parse(process.argv);
