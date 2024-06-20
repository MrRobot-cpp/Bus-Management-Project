// TripsManagement.js
import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RouteRow from '../RouteRow/RouteRow.jsx';
import styles from './TripsManagement.module.css';

function TripsManagement() {
const [routes, setRoutes] = useState([
{
id: uuidv4(),
'opening Time': new Date("2024-05-11").toISOString().split('T')[0],
'start Time': '10:00 AM',
"end Time": '11:00 AM',
'stop Name': 'Nady Al Ahly',
'stop Location': 'x, y',
'bus type': 'Mini Bus',
'No. of Seats': 30

},
// Additional initial routes...
]);

const [isAdding, setIsAdding] = useState(false);

const handleAddRoute = () => {
if (!isAdding) {
const newRoute = {
id: uuidv4(),
'opening Time': new Date().toISOString().split('T')[0], // default to today
'startTime': '',
'end Time': '',
'stop Name': '',
'stop Location': '',
'bus Type': '',
'No. of Seats': ''
};
setRoutes((prevRoutes) => [...prevRoutes, newRoute]);
setIsAdding(true);
}
};

const handleSaveNewRoute = (newRouteData) => {
// Save the new route and exit adding state
setRoutes((prevRoutes) =>
prevRoutes.map((route) =>
route.id === newRouteData.id ? newRouteData : route
)
);
setIsAdding(false);
};

const handleDeleteRoute = (id) => {
setRoutes((prevRoutes) => prevRoutes.filter((route) => route.id !== id));
};

const handleUpdateRoute = (updatedRoute) => {
setRoutes((prevRoutes) =>
prevRoutes.map((route) =>
route.id === updatedRoute.id ? updatedRoute : route
)
);
};

const shouldShowLocationButton = (route) => {
return true;
};

return (
<div className={styles['RouteManagement-container']}>
<div className={styles['routes-management-right-container']}>
<div className={styles['routes-container']}>
<div className={styles['routes-header-container']}>
<div className={styles['details-num-div']}>
<h4 className={styles['routes-header']}>Details</h4>
<h4 className={styles['numberOfRoutes']}>{routes.length}</h4>
</div>
<div className={styles['add-routes-btn']}>
<button onClick={handleAddRoute}>Add Route</button>
</div>
</div>
<hr />
<table className={styles["routes-table"]}>
<thead>
<tr>
{Object.keys(routes[0]).map((key) => (
<th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
))}
<th>Options</th>
</tr>
</thead>
<tbody>
{routes.map((route) => (
<RouteRow
key={route.id}
route={route}
onSave={isAdding && route.id === routes[routes.length - 1].id ? handleSaveNewRoute : handleUpdateRoute}
onDelete={handleDeleteRoute}
isEditing={isAdding && route.id === routes[routes.length - 1].id}
showLocationButton={shouldShowLocationButton(route)}
/>
))}
</tbody>
</table>
</div>
</div>
</div>
);
}

export default TripsManagement;



