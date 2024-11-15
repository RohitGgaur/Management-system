const express = require('express');
const cors = require('cors');
const path = require('path');

const mongodb = require('./db/mongo.js');
const User = require('./UserSchema/user.js');
const app = express();
app.use(express.json());
app.use(cors());

console.log(__dirname); // Prints the directory name
console.log(__filename); // Prints the file name

const PORT = process.env.PORT || 8000;

// Importing routes
const userRoutes = require('./router/auth.js');
app.use('/api', userRoutes);

const adminRoutes = require('./router/adminrouter.js');
app.use('/api', adminRoutes);

const teacherRoutes = require('./router/teacherrouter.js');
app.use('/api', teacherRoutes);

const studentdetail = require('./router/studentdetailrouter.js');
app.use('/api', studentdetail);

const teacherdetail = require('./router/teacherdetailrouter.js');
app.use('/api', teacherdetail);

const forgotpass = require('./router/forgotpassword.js');
app.use('/api', forgotpass);

const student = require('./router/getdata/studentfetch.js');
app.use('/api', student);

const teacher = require('./router/getdata/teacherfetch.js');
app.use('/api', teacher);

const studentbranch = require('./router/getdata/branchfetch.js');
app.use('/api', studentbranch);

const teacherDepartment = require('./router/getdata/departmentfetch.js');
app.use('/api', teacherDepartment);

const studentdelete = require('./router/delete/userdelete.js');
app.use('/api', studentdelete);

const book = require('./router/getdata/Book.js');
app.use('/api', book);

const studentupdate = require('./router/update/studentupdate.js');
app.use('/api', studentupdate);

const teacherupdate = require('./router/update/teacherupdate.js');
app.use('/api', teacherupdate);

const teacherdelete = require('./router/delete/teacherdelete.js');
app.use('/api', teacherdelete);

const subjectRoutes = require('./router/Subjectrouter.js');
app.use('/api', subjectRoutes);

const departmentstudent = require('./router/getdata/studentteacher.js');
app.use('/api', departmentstudent);

const branchteacher = require('./router/getdata/teacherstudent.js');
app.use('/api', branchteacher);

const Adminfetch = require('./router/getdata/teacherstudent.js');
app.use('/api', Adminfetch);

app.use(express.static(path.join(__dirname, '../management/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../management/build', 'index.html'));
});
// Starting the server
app.listen(PORT, () => {
    console.log(`Connection successful on port ${PORT}`);
});
