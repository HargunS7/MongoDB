// Microsoft Windows [Version 10.0.22631.4037]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\hargu>mongosh mongodb://localhost:27017
// Current Mongosh Log ID: 66d1d8fdaaf734ae162710bb
// Connecting to:          mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-30T11:37:06.557+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// Online-Exam-Portal  80.00 KiB
// admin               40.00 KiB
// config              72.00 KiB
// hargun              40.00 KiB
// local               88.00 KiB
// test> use hargun
// switched to db hargun
// hargun> db.mycollection.insertOne({z:2})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d1d922aaf734ae162710bc')
// }
// hargun> db.mycollection.find()
// [
//   { _id: ObjectId('66d165a0917bcfa73a2710bc'), x: 1 },
//   { _id: ObjectId('66d1d922aaf734ae162710bc'), z: 2 }
// ]
// hargun> show dbs
// Online-Exam-Portal  80.00 KiB
// admin               40.00 KiB
// config              72.00 KiB
// hargun              72.00 KiB
// local               88.00 KiB
// hargun> db.mycollection.find(1)
// MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
// hargun> db.mycollection.find(x)
// ReferenceError: x is not defined
// hargun> db.mycollection.find(x)
// ReferenceError: x is not defined
// hargun> db.mycollection.find()
// [
//   { _id: ObjectId('66d165a0917bcfa73a2710bc'), x: 1 },
//   { _id: ObjectId('66d1d922aaf734ae162710bc'), z: 2 }
// ]
// hargun> db.mycollection.find(x:1)
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:22)

// > 1 | db.mycollection.find(x:1)
//     |                       ^
//   2 |

// hargun> db.mycollection.find(x,1)
// ReferenceError: x is not defined
// hargun> db.mycollection.insertOne({date:ISODate()})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d1d9a1aaf734ae162710bd')
// }
// // hargun>