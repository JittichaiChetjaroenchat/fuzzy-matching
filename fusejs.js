import Fuse from 'fuse.js';
import * as fs from 'fs';

// Prepare dataset
const dataset = JSON.parse(fs.readFileSync('./datasources/customers.json', 'utf8'));

// Process
const keyword = "'ason | 'Male$ | '34";
const options = {
  getFn: (obj, path) => {
    const value = Fuse.config.getFn(obj, path)
    return value
  },
  includeScore: true,
  shouldSort: true,
  // minMatchCharLength: keyword.length,
  useExtendedSearch: true,
  keys: [
    { name: 'cx_Name', getFn: (customer) => customer.cx_Name },
    { name: 'cx_firstName', getFn: (customer) => customer.cx_firstName },
    { name: 'cx_lastName', getFn: (customer) => customer.cx_lastName },
    { name: 'cx_gender', getFn: (customer) => customer.cx_gender },
    { name: 'cx_birthDate', getFn: (customer) => customer.cx_birthDate },
    { name: 'address.number', getFn: (customer) => customer.address?.number },
  ]
  // keys: ['cx_Name', 'cx_firstName', 'cx_lastName', 'cx_gender', 'cx_birthDate', 'address.number']
};

const fuse = new Fuse(dataset, options);
const result = fuse.search(keyword);

/** Fuse.js scores usually go from 0 as the best match to 1 as no match */
console.log(result);