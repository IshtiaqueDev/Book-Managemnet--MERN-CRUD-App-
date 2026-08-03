const express=require("express");
const wrapAsync=require("../utils/wrapAsync");
const BookController=require("../controllers/books");
const router=express.Router();


router.route("/").
get(wrapAsync(BookController.getData))

router.route("/addBook").
post(wrapAsync(BookController.AddData))

router.route("/:id/edit").
put(wrapAsync(BookController.updateData))

router.route("/:id/delete").
delete((wrapAsync(BookController.deleteData)))

module.exports = router;