// import { error } from 'console'
// import { stderr, stdout } from 'process'
const {exec} = require('child_process')

exports.RunPythonCode = (req, res, next) => {
    const pythonScript = 'main.py';
    // const { number } = req.body;
    console.log("inside controller")

 
    // exec(`python3 ${pythonScript} ${number}`, (error, stdout, stderr) => {
    exec(`python ${pythonScript}`, (error, stdout, stderr) => {
       if (error) {
          console.error(`Error executing Python script: ${error.message}`);
          res.status(401).json({ error: 'Internal Server Error' });
          return;
       }
    //    console.log("python file run",stdout)
       // Log any error messages from stderr
       if (stderr) {
          console.error(`Python script stderr: ${stderr}`);
       }
 
       // Send the response only after the Python script has executed
       res.status(200).json({
          message: 'success',
        //   number: { number },
          data: { stdout },
       });
    });
 };