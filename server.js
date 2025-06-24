require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'uliana.deshin@gmail.com',
            subject: 'Portfolio Contact Form Message',
            text: message,
            html: `<p><b>Name:</b> ${name}</p>
                   <p><b>Email:</b> ${email}</p>
                   <p><b>Message:</b><br>${message}</p>`
        });
        res.status(200).json({ success: true, message: 'Message sent!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));