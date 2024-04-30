import styles from './DataOrganizer.module.css'

const currentDate = new Date();

const week = currentDate.getDay();
const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const currentDay = daysOfWeek[week];

const month = currentDate.getMonth();
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentMonth= monthsOfYear[month];

const currentDayOfMonth = currentDate.getDate();



// eslint-disable-next-line no-unused-vars
function DateOrganizer(_props){
    // const [lineStart,lineEnd,day]=props
    return(<>
    <link src='https://kit.fontawesome.com/a076d05399.js'></link>
    <div className={styles['data-organizer']}>
        <div className={styles['data']}>
            <h2>Schedule</h2>

            <span>
            <p>{currentDayOfMonth} {currentMonth},{currentDay}</p>
            <p><i className='fas fa-angle-down'></i></p>
            </span>

        <div className={styles['current-data']}>
            
        </div> 

        <span>
        <h3>Upcoming</h3>
        <h3><i className='fas fa-angle-down'></i></h3>
        </span>

        <div className={styles['upcoming-data']}></div> 

        </div>
    </div>
    </>
    )
}
export default DateOrganizer