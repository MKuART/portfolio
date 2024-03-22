import "dotenv/config";
import mongoose from 'mongoose';
import Teacher from './models/teacherModel.js';
import Course from './models/coursesModel.js';

const MONGO_DB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017';

mongoose.connect(MONGO_DB_URI)
 .then(async () => {
    console.log('Verbunden mit MongoDB.');

    const teachers = [
      { name: 'John B. Willis',
        email: "johnbwillis@example.com",
        password: "john!1234"},
      { name: 'Kevin Smith',
        email: "kevinsmith@example.com",
        password: "kevin!1234"},
      { name: 'Jennifer Evans',
        email: "jenniferevans@example.com",
        password: "jennifer!1234" },
      { name: 'Matthew Thompson',
        email: "matthewthompson@example.com",
        password: "matthew!1234" },
      { name: 'Laura Davis',
        email: "laura@example.com",
        password: "laura!1234" },
      { name: 'Andre Wilson',
        email: "andrewilson@example.com",
        password: "andre!1234" },
    ];

    await Teacher.insertMany(teachers);
    console.log('Lehrer-Daten erfolgreich hinzugefügt.');

    const courses = [
      { name: 'Mathematics', teacher: teachers.find(t => t.name === 'John B. Willis')._id },
      { name: 'Science', teacher: teachers.find(t => t.name === 'Kevin Smith')._id },
      { name: 'English', teacher: teachers.find(t => t.name === 'Jennifer Evans')._id },
      { name: 'History', teacher: teachers.find(t => t.name === 'Matthew Thompson')._id },
      { name: 'Geography', teacher: teachers.find(t => t.name === 'Laura Davis')._id },
      { name: 'Art', teacher: teachers.find(t => t.name === 'Andre Wilson')._id },
      { name: 'Music', teacher: teachers.find(t => t.name === 'John B. Willis')._id },
      { name: 'Physical Education', teacher: teachers.find(t => t.name === 'Jennifer Evans')._id },
      { name: 'Chemistry', teacher: teachers.find(t => t.name === 'Kevin Smith')._id },
      { name: 'Biology', teacher: teachers.find(t => t.name === 'Laura Davis')._id },
    ];

    await Course.insertMany(courses);
    console.log('Kurs-Daten erfolgreich hinzugefügt.');

    mongoose.disconnect();
 })
 .catch((error) => {
    console.error('Fehler beim Verbinden mit MongoDB:', error);
 });
