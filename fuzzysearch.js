import FuzzySearch from 'fuzzy-search';
import * as fs from 'fs';

// Prepare dataset
const dataset = JSON.parse(fs.readFileSync('./datasources/customers.json', 'utf8'));

// Process
const keyword = 'ason';
const searcher = new FuzzySearch(dataset, ['cx_Name', 'cx_firstName', 'cx_lastName', 'cx_gender', 'cx_birthDate', 'address.number'], {
  caseSensitive: false,
  sort: true,
});
const result = searcher.search(keyword);

console.log(result);