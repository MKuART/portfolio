import "dotenv/config";
import mongoose from "mongoose";

import Course from "./models/coursesModel";

const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://localhost:27017";

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("Verbunden mit MongoDB.");

    const courses = [
      { name: "Mathematics", teacher: "John B. Willis", participants: `${courseParticipants} of ${openSlots}` },
      { name: "Science", teacher: "Kevin Smith", participants: `${courseParticipants} of ${openSlots}` },
      { name: "English", teacher: "Jennifer Evans", participants: `${courseParticipants} of ${openSlots}`},
      { name: "History", teacher: "Matthew Thompson", participants: `${courseParticipants} of ${openSlots}` },
      { name: "Geography", teacher: "Laura Davis", participants: `${courseParticipants} of ${openSlots}` },
      { name: "Art", teacher: "Andre Wilson", participants: `${courseParticipants} of ${openSlots}` },
      { name: "Music", teacher: "John B. Willis", participants: `${courseParticipants} of ${openSlots}`},
      { name: "Physical Education", teacher: "Jennifer Evans", participants: `${courseParticipants} of ${openSlots}` },
      { name: "Chemistry", teacher: "Kevin Smith", participants: `${courseParticipants} of ${openSlots}` },
      { name: "Biology", teacher: "Laura Davis", participants: `${courseParticipants} of ${openSlots}` },
    ];

    Course.insertMany(courses)
      .then(() => {
        console.log("Testdaten erfolgreich hinzugefügt.");
        mongoose.disconnect(); 
      })
      .catch((error) => {
        console.error("Fehler beim Einfügen von Testdaten:", error);
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error("Fehler beim Verbinden mit MongoDB:", error);
  });
