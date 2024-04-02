import express from 'express';
import { createProject, getAllProjects } from '../controllers/ProjectController.js';

const router = express.Router();

router
    .route('/')
        .get( getAllProjects )
        .post( createProject )

export default router

/**
 * {
  "name": "Mein Projekt",
  "description": "Eine Beschreibung für mein Projekt",
  "imageUrls": [
    "/assets/mku/bild1.jpg",
    "/assets/mku/bild2.jpg"
  ]
}
{
  "email": "cchirurg@mail.com",
  "password": "trinitaet369"
}

_id
65fffff65f93a316d10c6870
membername
"codechirurg"
role
"Admin"
email
"cchirurg@mail.com"
password
"$2b$10$oBlN5SQUlBTHPJ7LsH6Od.1JM4tvRKO99M6KibWP84qiCERuQcJG6"
 */