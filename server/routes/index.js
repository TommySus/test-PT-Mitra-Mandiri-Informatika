const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/employeeController')


router.get("/", EmployeeController.showAllEmployee)
router.get("/position", EmployeeController.showAllPosition)
router.post("/", EmployeeController.addEmployee)
router.put("/edit/:id", EmployeeController.editEmployee)
router.patch("/delete/:id", EmployeeController.deleteEmployee)
router.get("/:id", EmployeeController.findEmployeeById)


module.exports = router