const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const dashboardStats = {
    totalAppointments: 154,
    newPatients: 42,
    successRate: '78%',
    leadsThisMonth: 128
};

const appointments = [
    { id: 1, patientName: 'Anitha Reddy', type: 'IVF Consultation', date: '2026-05-12', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Suresh Kumar', type: 'IUI Procedure', date: '2026-05-12', time: '11:30 AM', status: 'Pending' },
    { id: 3, patientName: 'Priya Lakshmi', type: 'General Checkup', date: '2026-05-13', time: '09:00 AM', status: 'Confirmed' },
    { id: 4, patientName: 'Rajesh Varma', type: 'Semen Analysis', date: '2026-05-13', time: '02:00 PM', status: 'Cancelled' },
];

const patients = [
    { id: 1, name: 'Anitha Reddy', age: 32, location: 'Hyderabad', treatments: ['IVF'], lastVisit: '2026-04-20' },
    { id: 2, name: 'Suresh Kumar', age: 35, location: 'Vijayawada', treatments: ['IUI'], lastVisit: '2026-05-01' },
    { id: 3, name: 'Priya Lakshmi', age: 29, location: 'Vizag', treatments: ['Consultation'], lastVisit: '2026-05-05' },
];

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Fertility CRM API is running' });
});

app.get('/api/dashboard', (req, res) => {
    res.json(dashboardStats);
});

app.get('/api/appointments', (req, res) => {
    res.json(appointments);
});

app.get('/api/patients', (req, res) => {
    res.json(patients);
});

app.post('/api/appointments', (req, res) => {
    const { patientName, type, date } = req.body;

    // Validation loophole fix
    if (!patientName || !type || !date) {
        return res.status(400).json({ 
            error: 'Missing required fields', 
            details: 'patientName, type, and date are required.' 
        });
    }

    const newAppointment = {
        id: appointments.length + 1,
        patientName,
        type,
        date,
        time: req.body.time || 'TBD',
        status: 'Pending'
    };

    appointments.push(newAppointment);
    console.log('New appointment added:', newAppointment);
    res.status(201).json(newAppointment);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
