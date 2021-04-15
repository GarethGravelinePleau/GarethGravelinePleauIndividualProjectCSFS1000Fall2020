require('dotenv').config();
import util from 'util'
import fs from 'fs'
import path from 'path'


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const entriesDB = path.resolve(`${process.env.databaseroute}`);
const usersDB = path.resolve(`${process.env.databaseroutetwo}`)


async function readEntries() {
  const json = await readFile(entriesDB);
  return JSON.parse(json);
}

async function writeEntries(entries) {
  const json = JSON.stringify(entries);
  return writeFile(entriesDB, json);
}

async function readUsers() {
    const json =await readFile(usersDB);
    return JSON.parse(json);
}

async function writeUsers(users) {
    const json = JSON.stringify(users);
    return writeFile(usersDB, json);
  }


export {
  writeEntries,
  readEntries,
  readUsers,
  writeUsers
};
