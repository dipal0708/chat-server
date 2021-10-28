/*
 * File: required.js
 * Path: /app/middlewares/required.js
 * Project: Offshore: Recruitment API
 * File Created: Wednesday, 3rd February 2021 12:51:03 am
 * Author: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Last Modified: Thursday, 4th February 2021 5:03:38 pm
 * Modified By: Ankit Gupta (ankit.gupta@techrbm.com)
 * -----
 * Copyright 2021 - 2021 Offshore: Ludhiana, Offshore: Ludhiana
 */

module.exports = (fields) => {
    return (req, res, next) => {
        let params = req.body

        if (req.method === 'GET')
            params = { ...req.params, ...req.query }

        if (!params)
            return res.status(422).json({ status: false, message: `Parameter required: ${fields.join(', ')}` })

        const errors = fields.filter(e => !params[e])

        if (errors.length)
            return res.status(422).json({ status: false, message: `Parameter required: ${errors.join(', ')}` })

        return next()
    }
}