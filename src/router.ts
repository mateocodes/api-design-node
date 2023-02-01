import { Router } from 'express';

// This way we create a new router instance
const router = Router();

/** Product */
router.get("/product", (req, res) => {
    res.send("Hello from product");
    res.status(200);
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product/", () => {});
router.delete("/product/:id", () => {});

/** Update */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.delete("/update/:id", () => {});

/** Update Point */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint/", () => {});
router.delete("/updatepoint/:id", () => {});

// export the router
export default router;
