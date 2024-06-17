import { useState } from 'react';

import styles from './StudentTrip.module.css';

function StudentTrip() {
    const [routes, setRoutes] = useState([
        { day: "Saturday", startFrom: 'A', endAt: 'B', tripType: 'Going to', goingTime: '10:00 AM', leavingTime: '3:00 PM' },
        { day: "Saturday", startFrom: 'B', endAt: 'A', tripType: 'Leaving from', goingTime: '3:00 PM', leavingTime: '4:00 PM' }
    ]);

    const [selectedRoute, setSelectedRoute] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ x: 5000, y: 0 });

    const [editRoute, setEditRoute] = useState({
        day: '',
        startFrom: '',
        endAt: '',
        tripType: '',
        goingTime: '',
        leavingTime: ''
    });

    const validateInputs = () => {
        // Validation logic for startFrom and endAt (start with letters)
        const startFromRegex = /^[a-zA-Z]+$/;
        const endAtRegex = /^[a-zA-Z]+$/;

        // Validation logic for tripType (either 'Going to' or 'Returning from')
        const validTripTypes = ['Going to', 'Returning from'];

        // Validation logic for numberOfStops (must be a number from 1 to 40)
        const numberOfStops = parseInt(editRoute.numberOfStops);
        const isNumberOfStopsValid = !isNaN(numberOfStops) && numberOfStops >= 1 && numberOfStops <= 40;

        // Validation logic for startTime and endTime (valid date and time)
        const startTimeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
        const endTimeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;

        const isStartTimeValid = startTimeRegex.test(editRoute.startTime);
        const isEndTimeValid = endTimeRegex.test(editRoute.endTime);

        return (
            startFromRegex.test(editRoute.startFrom) &&
            endAtRegex.test(editRoute.endAt) &&
            validTripTypes.includes(editRoute.tripType) &&
            isNumberOfStopsValid &&
            isStartTimeValid &&
            isEndTimeValid
        );
    };

    const positionModal = (event) => {
        const modal = document.querySelector('.modal');
        const rect = event.target.getBoundingClientRect();
        const modalWidth = modal.offsetWidth;
        const modalHeight = modal.offsetHeight;
        const clickX = rect.left + window.scrollX + rect.width / 2;
        const clickY = rect.top + window.scrollY + rect.height / 2;
        const newX = clickX - modalWidth / 2;
        const newY = clickY - modalHeight / 2;
        modal.style.left = `${newX}px`;
        modal.style.top = `${newY}px`;
    };

    const addRoute = () => {
        const newRoute = {
            day: '',
            startFrom: '',
            endAt: '',
            tripType: '',
            goingTime: '',
            leavingTime: ''
            };
        setRoutes([...routes, newRoute]);
    };

    const handleEditRoute = (id, event) => {
        const routeToEdit = routes.find(route => route.id === id);
        setEditRoute(routeToEdit);
        setSelectedRoute(id);
        setIsModalOpen(true);
        positionModal(event);
    };

    const handleConfirmEdit = () => {
        if (validateInputs()) {
            const updatedRoutes = routes.map(route => {
                if (route.id === selectedRoute) {
                    return editRoute;
                }
                return route;
            });
            setRoutes(updatedRoutes);
            setIsModalOpen(false);
        } else {
            alert('Please fill all fields correctly.');
        }
    };

    const handleDeleteRoute = (id) => {
        const updatedRoutes = routes.filter(route => route.id !== id);
        setRoutes(updatedRoutes);
        setIsModalOpen(false);
    };


    return (
        <div className={styles['RouteManagement-container']}>
            <div className={styles['routes-management-right-container']}>
                <div className={styles['routes-container']}>
                    <div className={styles['routes-header-container']}>
                        <div className={styles['details-num-div']}>
                            <h4 className={styles['routes-header']}>Days</h4>
                            <h4 className={styles['numberOfRoutes']}>{routes.length}</h4>
                        </div>
                    </div>
                    <hr />
                    <table className={styles["routes-tableI"]}>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Start from</th>
                                <th>End at</th>
                                <th>Trip type</th>
                                <th>goingTime</th>
                                <th>leavingTime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.map((route) => (
                                <tr key={route.day}>
                                    <td>{route.day}</td>
                                    <td>{route.startFrom}</td>
                                    <td>{route.endAt}</td>
                                    <td>{route.tripType}</td>
                                    <td>{route.goingTime}</td>
                                    <td>{route.leavingTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );


    // return (
    //     <>
    //         <div className='student-trip-container'>
    //             <div className='student-trip'>
    //                 <div className='head'>
    //                     <span className='head-txt'>Trips</span>
    //                 </div>
    //             </div>
    //         </div>

    //     </>
    // );
}

export default StudentTrip;