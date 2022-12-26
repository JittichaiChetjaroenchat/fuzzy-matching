import { QuickScore } from 'quick-score';
import * as fs from 'fs';

// Prepare dataset
const dataset = JSON.parse(fs.readFileSync('./datasources/customers.json', 'utf8'));

// Process
const keyword = 'ason';
const qs = new QuickScore(dataset, ['cx_Name', 'cx_firstName', 'cx_gender', 'cx_birthDate', 'cx_lastName', 'address.number']);
const result = qs.search(keyword);

console.log(result);