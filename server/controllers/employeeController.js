const { Employee, Position } = require('../models')

class EmployeeController {
    static showAllEmployee (req,res,next) {
        Employee.findAll({where: {is_delete: 0}, include: Position})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            next(error)
        })
    }

    static showAllPosition (req,res,next) {
        Position.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            next(error)
        })
    }

    static addEmployee (req,res,next) {
        const obj = {
            name: req.body.name,
            birth_date: req.body.birth_date,
            PositionId: req.body.PositionId,
            id_number: req.body.id_number,
            gender: req.body.gender,
            is_delete: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        Employee.create(obj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            next(error)
        })
    }

    static findEmployeeById (req,res,next) {
        Employee.findOne({where: {id: req.params.id}, include: Position})
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'data karyawan tidak di temukan' }) 
            }
            
        })
        .catch(error => {
            next(error)
        })
    }

    static deleteEmployee (req,res,next) {
        const obj = {
            is_delete: 1
        }
        Employee.update(obj,{where: {id: req.params.id}})
        .then(data => {
            if (data) {
                return Employee.findOne({where: {id: req.params.id}})
                .then(data2 => {
                   res.status(200).json(data2) 
                })
                .catch(error => {
                    throw {
                        status: 404,
                        message: 'data karyawan tidak di temukan'
                    }
                })   
            } else {
                throw {
                    status: 404,
                    message: 'data karyawan tidak di temukan'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }

    static editEmployee (req,res,next) {
        const obj = {
            name: req.body.name,
            birth_date: req.body.birth_date,
            PositionId: req.body.PositionId,
            id_number: req.body.id_number,
            gender: req.body.gender
        }
        Employee.update(obj,{where: {id: req.params.id}})
        .then(data => {
            if (data) {
                return Employee.findOne({where: {id: req.params.id}, include: Position})
                .then(data2 => {
                   res.status(200).json(data2) 
                })
                .catch(error => {
                    throw {
                        status: 404,
                        message: 'data karyawan tidak di temukan'
                    }
                })   
            } else {
                throw {
                    status: 404,
                    message: 'data karyawan tidak di temukan'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }
}


module.exports = EmployeeController