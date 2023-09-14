const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// การเชื่อมต่อ MongoDB
mongoose.connect('mongodb+srv://admin:12345@cluster0.y2lpijq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  phone: String,
  password: String,
  bank: String,
  bankNum: String
});

const User = mongoose.model('User', userSchema);

// สร้าง API Endpoint
app.post('/register', (req, res) => {
  const newUser = new User(req.body);
  
  newUser.save()
    .then(() => res.status(201).send("User Created"))
    .catch(err => res.status(400).send(err));
});

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
