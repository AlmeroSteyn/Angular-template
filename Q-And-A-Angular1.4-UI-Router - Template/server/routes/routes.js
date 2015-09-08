'use strict';

module.exports = function (app) {

    var personArray = [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Paul'
        },
        {
            id: 3,
            name: 'Sam'
        },
        {
            id: 4,
            name: 'Geoff'
        },
        {
            id: 5,
            name: 'Jerry'
        },
        {
            id: 6,
            name: 'Mark'
        }
    ];

    function getMaxIndex(array) {
        var maxId = 0;

        array.forEach(function (element) {
            if (element.id > maxId) {
                maxId = element.id;
            }
        });

        return maxId;
    }

    function checkName(array, name) {
        var found = false;

        array.forEach(function (element) {
            if (element.name === name) {
                found = true;
            }
        });

        return found;
    }

    function getById(array, id) {
        var person = null;

        array.forEach(function (element) {
            if (element.id === id) {
                person = element;
            }
        });

        return person;
    }

    function removeById(array, id) {
        var newArray = [];

        array.forEach(function (element) {
            if (element.id !== id) {
                newArray.push(element);
            }
        });

        return newArray;
    }

    app.get('/api/persons', function (req, res) {
        res.json(personArray);
    });

    app.post('/api/persons', function (req, res) {
        if (!req.body.name) {
            res.sendStatus(400);
        }
        else if (checkName(personArray, req.body.name)) {
            res.sendStatus(409);
        }
        else {
            try {
                var newPerson = req.body;
                newPerson.id = getMaxIndex(personArray) + 1;
                personArray.push(newPerson);
                res.json(newPerson);
            }
            catch (err) {
                res.sendStatus(500);
            }
        }
    });

    app.get('/api/persons/:personId', function (req, res) {

        var numericId

        numericId = parseInt(req.params.personId);

        if (isNaN(numericId)) {
            res.sendStatus(400);
        }
        else {

            var person = getById(personArray, numericId);

            if (person) {
                res.json(person);
            }
            else {
                res.sendStatus(404);
            }
        }
    });

    app.put('/api/persons/:personId', function (req, res) {

        var numericId

        numericId = parseInt(req.params.personId);

        if (isNaN(numericId) || !req.body.name) {
            res.sendStatus(400);
        }
        else {
            var person = getById(personArray, numericId);

            if (person) {
                person.name = req.body.name;
                res.json(person);
            }
            else {
                res.sendStatus(404);
            }
        }

    });

    app.delete('/api/persons/:personId', function (req, res) {

        var numericId

        numericId = parseInt(req.params.personId);

        if (isNaN(numericId)) {
            res.sendStatus(400);
        }
        else {
            var person = getById(personArray, numericId);
            if (person) {
                personArray = removeById(personArray, numericId);
                res.sendStatus(200);
            }
            else {
                res.sendStatus(404);
            }
        }
    });

    app.post('/api/validate', function (req, res) {
        if (req.body.number && parseInt(req.body.number) % 10 !== 0) {
            res.sendStatus(400);
        }
        else {
            res.sendStatus(200);
        }

    });

};