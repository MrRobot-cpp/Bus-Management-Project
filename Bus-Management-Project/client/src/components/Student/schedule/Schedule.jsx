import './Schedule.css'


const getWeekDates = () => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    
    // Days to show: Sunday, Monday, Tuesday, Wednesday, Thursday, Saturday (excluding Friday)
    const daysToShow = [0, 1, 2, 3, 4, 6]; // 0: Sunday, 1: Monday, etc.
    
    const weekDates = daysToShow.map(offset => {
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + offset);
    return date;
    });

    return weekDates;
};

function getDate(type) {
    const today = new Date();
    const monthNames = [
        "January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ];

    const year = today.getFullYear();
    const month = monthNames[today.getMonth()]; // Get month name

    if (type == 'month') {
        return month;
    } else {
        return year;
    }
}


const Schedule = () => {

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Sat'];
    const weekDates = getWeekDates();
    const today = new Date();

    return (
        <>
        <div className="schedule">
            <p className='month-title'>{`${getDate("month")} ${getDate('year')}`}</p>
            <div className="current-week">
                {days.map((day, index) => {
                    const date = weekDates[index];
                    const isToday = date.toDateString() === today.toDateString();
                    return (
                    <div className='current-day' key={day} style={{backgroundColor: isToday ? '#263159' : '#495579'}}>
                        <div>{day}</div>
                        <div>{date.getDate()}</div>
                    </div>
                    );
                })}
            </div>
            <hr />
            <p className='schedule-title'>Schedule</p>
            <div className="schedule-content">
            <div className="schedule-item">
                <div className="name-time">
                    <h4>Shobra to MIU</h4>
                    <p>7:30 AM - 8:30 AM</p>
                </div>
                <div className='status-more'>
                    <p className='status'>In Progress</p>
                    <p>More</p> {/* will link to trips page*/}
                </div>
            </div>
            <div className="schedule-item">
                <div className="name-time">
                    <h4>Shobra to MIU</h4>
                    <p>7:30 AM - 8:30 AM</p>
                </div>
                <div className='status-more'>
                    <p className='status'>In Progress</p>
                    <p>More</p> {/* will link to trips page*/}
                </div>
            </div>
            </div>
            
        </div>

        </>
    )
}

export default Schedule