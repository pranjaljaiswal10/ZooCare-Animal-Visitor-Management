import { Router } from "express";
import {
  createAnimal,
  deleteAnimal,
  getAnimalById,
  getAnimalList,
  updateAnimal,
} from "../controllers/animal.controller";

const animalRouter = Router();

animalRouter.post("/", createAnimal);
animalRouter.put("/:id", updateAnimal);
animalRouter.get("/", getAnimalList);
animalRouter.get("/:id", getAnimalById);
animalRouter.delete("/:id", deleteAnimal);

export default animalRouter;
