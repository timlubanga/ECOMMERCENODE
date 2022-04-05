
const mongoose = require('mongoose');
const ConnectString=`mongodb+srv://timlubs:${process.env.DB_PASS}@cluster0.bry7y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

// database connect

const databaseConnect=()=>{
    mongoose.connect(ConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((res) => {
      console.log(`database connected successfully`);
      return res;
  }).catch((err)=>{
      console.log(`error occured connecting to db ${err}`)
      return err;
  })

}

module.exports= databaseConnect