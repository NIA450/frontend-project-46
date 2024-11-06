#!/usr/bin/env node

import { Command } from "commander";
import parseData from "./parser.js";

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
    const data1 = parseData(filepath1);
    const data2 = parseData(filepath2);

    console.log(`Comparing ${filepath1} and ${filepath2} with format: ${format}`);
    console.log('Data from file 1:', data1);
    console.log('Data from file 2:', data2);
  });

// Парсинг аргументов командной строки
program.parse(process.argv);
