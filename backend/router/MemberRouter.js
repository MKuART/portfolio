import express from 'express';
import { createMember, getAllMembers, loginMember } from '../controllers/MemberController.js';

const router = express.Router();

router
    .route('/')
        .get( getAllMembers )

router
    .route('/login')
        .post( loginMember )

router
    .route('/create')
        .post( createMember )


export default router;
