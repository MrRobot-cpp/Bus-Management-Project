import styles from './DataOrganizer.module.css'

const currentDate = new Date();

const week = currentDate.getDay();
const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const currentDay = daysOfWeek[week];

const month = currentDate.getMonth();
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentMonth= monthsOfYear[month];

const currentDayOfMonth = currentDate.getDate();



function DateOrganizer(props){
    // const [lineStart,lineEnd,day]=props
    return(<>
    <link src='https://kit.fontawesome.com/a076d05399.js'></link>
    <div className={styles['data-organizer']}>
        <div className={styles['data']}>
            <h2>Schedule</h2>
            <span>
            <p>{currentDayOfMonth} {currentMonth},{currentDay}</p>
            <p><i class='fas fa-angle-down'></i></p>
            </span>
         <div className={styles['current-data']}>
            
        </div>   
        </div>
    </div>
    </>
    )
}
export default DateOrganizer