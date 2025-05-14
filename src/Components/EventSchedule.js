import React, { useState, useEffect } from "react";
import bookimage3 from "../Assets/bookimage3.png";
import "../Styles/eventschedule.css";
import great from "../Assets/great.png";
import less from "../Assets/less.png";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const EventScheduleSection = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const formatDateForDisplayAndEmail = (dateObj) => {
        if (!dateObj || !(dateObj instanceof Date) || isNaN(dateObj)) {
            return '';
        }
        return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    };

    const initialSelectedFullDate = new Date(2025, 4, 9);
    const initialSelectedTimeSlot = "10:00";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event: '',
        message: '',
        date: formatDateForDisplayAndEmail(initialSelectedFullDate),
        time: initialSelectedTimeSlot,
    });

    const [currentDisplayDate, setCurrentDisplayDate] = useState(new Date(2025, 4, 1));
    const [selectedFullDate, setSelectedFullDate] = useState(initialSelectedFullDate);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(initialSelectedTimeSlot);


    useEffect(() => {
        emailjs.init('HP9HGIw-7S-y6F7rb');
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCalendarDayClick = (day) => {
        const newSelectedDate = new Date(currentDisplayDate.getFullYear(), currentDisplayDate.getMonth(), day);
        setSelectedFullDate(newSelectedDate);
        setFormData(prev => ({ ...prev, date: formatDateForDisplayAndEmail(newSelectedDate) }));
    };

    const handleTimeSlotBtnClick = (time) => {
        setSelectedTimeSlot(time);
        setFormData(prev => ({ ...prev, time: time }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            date: formData.date || formatDateForDisplayAndEmail(selectedFullDate),
            time: formData.time || selectedTimeSlot,
        };


        emailjs.send('service_0w9ju08', 'template_6v1jstm', dataToSend)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Event Booked',
                    text: 'Your booking was submitted successfully! We`ll be in touch within 24 hours',
                    confirmButtonColor: '#4CAF50',
                });

                setSelectedFullDate(initialSelectedFullDate);
                setSelectedTimeSlot(initialSelectedTimeSlot);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    event: '',
                    message: '',
                    date: formatDateForDisplayAndEmail(initialSelectedFullDate),
                    time: initialSelectedTimeSlot,
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong: ' + (error.text || JSON.stringify(error)),
                    confirmButtonColor: '#d33',
                });
            });
    };

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const handlePrevMonth = () => {
        setCurrentDisplayDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDisplayDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const generateCalendarCellsFor5Rows = (year, month) => {
        const cells = [];
        const firstDayOfMonth = new Date(year, month, 1);
        const numDaysInMonth = new Date(year, month + 1, 0).getDate();
        const dayOfWeekOfFirst = (firstDayOfMonth.getDay() + 6) % 7;

        for (let i = 0; i < dayOfWeekOfFirst; i++) {
            cells.push({ day: "", type: "empty", key: `prev-empty-${i}` });
        }

        for (let day = 1; day <= numDaysInMonth; day++) {
            const currentDateObj = new Date(year, month, day);
            const isSelected = selectedFullDate &&
                currentDateObj.getFullYear() === selectedFullDate.getFullYear() &&
                currentDateObj.getMonth() === selectedFullDate.getMonth() &&
                currentDateObj.getDate() === selectedFullDate.getDate();
            cells.push({
                day: day,
                type: "current",
                selected: isSelected,
                key: `current-${day}`
            });
        }

        const totalCellsTarget = 35;
        while (cells.length < totalCellsTarget && cells.length > 0) {
            cells.push({
                day: "",
                type: "empty",
                key: `next-empty-${cells.length}`
            });
        }
        return cells.slice(0, totalCellsTarget);
    };

    const calendarDays = generateCalendarCellsFor5Rows(currentDisplayDate.getFullYear(), currentDisplayDate.getMonth());
    const displayMonthName = monthNames[currentDisplayDate.getMonth()];
    const displayYear = currentDisplayDate.getFullYear();
    const formattedMonthYear = `${displayMonthName} ${displayYear}`;

    const timeSlotsData = [
        { time: "10:00" }, { time: "10:30" }, { time: "11:00" }, { time: "11:30" },
        { time: "12:00" }, { time: "12:30" }, { time: "01:00 PM" }, { time: "01:30 PM" },
        { time: "02:00 PM" }, { time: "02:30 PM" }, { time: "03:00 PM" }, { time: "03:30 PM" },
        { time: "04:00 PM" }, { time: "04:30 PM" }, { time: "05:00 PM" }, { time: "05:30 PM" },
        { time: "06:00 PM" }, { time: "06:30 PM" }, { time: "07:00 PM" },{ time: "07:30 PM" }
    ];



    return (
        <div className="event-schedule-section">
            <div className="image-column">
                <img className="eventimage" src={bookimage3} alt="Event planning" />
            </div>
            <div className="form-container">
                <div className="form-content-wrapper">
                    <h1 className="main-title">Book An Event Now</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Enter Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Enter E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your e-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Enter Phone.No</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="event-type">Select an Event</label>
                            <select
                                id="event-type"
                                name="event"
                                value={formData.event}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="wedding">Wedding</option>
                                <option value="birthday">Birthday Party</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter your message (optional)"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="date-time-selector">
                            <h2 className="sub-title">Select a Date And Time</h2>
                            <div className="date-time-picker-wrapper">
                                <div className="calendar-container">
                                    <div className="calendar-header">
                                        <button type="button" className="nav-arrow" onClick={handlePrevMonth}><img src={less} alt="Previous month" /></button>
                                        <span>{formattedMonthYear}</span>
                                        <button type="button" className="nav-arrow" onClick={handleNextMonth}><img src={great} alt="Next month" /></button>
                                    </div>
                                    <div className="calendar-grid">
                                        {daysOfWeek.map((day) => (
                                            <div key={day} className="day-name">
                                                {day}
                                            </div>
                                        ))}
                                        {calendarDays.map((dateInfo) => (
                                            <div
                                                key={dateInfo.key}
                                                className={
                                                    `date ${dateInfo.type === 'empty' ? 'empty' : ''} ` +
                                                    `${dateInfo.selected ? "selected" : ""}`
                                                }
                                                onClick={() => dateInfo.type === 'current' && handleCalendarDayClick(dateInfo.day)}
                                                style={{ cursor: dateInfo.type === 'current' ? 'pointer' : 'default' }}
                                            >
                                                {dateInfo.day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="time-slots-container">
                                    {timeSlotsData.map((slot) => (
                                        <button
                                            key={slot.time}
                                            type="button"
                                            className={`time-slot ${selectedTimeSlot === slot.time ? "selected" : ""}`}
                                            onClick={() => handleTimeSlotBtnClick(slot.time)}
                                        >
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="book-now-btn">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventScheduleSection;