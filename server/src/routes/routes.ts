import { Router, Request, Response } from "express";
import { integerToRoman } from '../services/integer-to-roman.service';

const router = Router();

// romannumeral route
router.get(`/romannumeral`, (req: Request, res: Response) => {
    const queryInteger: number = parseInt(req.query.query as string);
    const result = integerToRoman(queryInteger);
    if (!result) res.status(400).json("Number must be in the range 1-3999")
    else res.json(integerToRoman(queryInteger));
});

export default router;