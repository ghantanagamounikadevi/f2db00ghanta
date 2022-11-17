var university = require('../models/university');

// List of all universityes
exports.university_list = async function (req, res) {
    try {
        theuniversities = await university.find(); //modified here also
        res.send(theuniversities); //modified tyes to ties
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific university. 
exports.university_detail = async function (req, res) {
    console.log("detail " + req.params.id)
    try {
        result = await university.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle university create on POST. 
exports.university_create_post = async function (req, res) {
    console.log(req.body)
    let document = new university();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object
    document.university_type = req.body.university_type;
    document.universitysize = req.body.universitysize;
    document.universitycost = req.body.universitycost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle university delete form on DELETE. 
exports.university_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await university.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle university update form on PUT. 
exports.university_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await university.findById(req.params.id)
        // Do updates of properties 
        if (req.body.university_type)
            toUpdate.university_type = req.body.university_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS 
// Handle a show all view 
exports.university_view_all_Page = async function (req, res) {
    try {
        theuniversities = await university.find();
        res.render('university', { title: 'university Search Results', results: theuniversites });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
//Assignment 12 

// Handle a show one view with id specified by query 
exports.university_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await university.findById(req.query.id)
        res.render('universitydetail',
            { title: 'university Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle building the view for creating a university. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.university_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('universitycreate', { title: 'university Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a university. 
// query provides the id 
exports.university_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await university.findById(req.query.id)
        res.render('universityUpdate', { title: 'university Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.university_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await university.findById(req.query.id)
        res.render('universityDelete', { title: ' university Delete', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 