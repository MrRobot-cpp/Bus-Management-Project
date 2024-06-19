
import { v4 as uuidv4 } from 'uuid';

// Add a new route
export const addRoute = (setRoutes) => {
    const newRoute = {
    id: uuidv4(),
    startTime: '',
    endTime: '',
    speedLimit: 0,
    maxNoStudents: 0,
    date: ''
    };
    setRoutes(prevRoutes => [...prevRoutes, newRoute]);
};

// Edit an existing route
export const editRoute = (routes, id, updatedRoute) => {
    return routes.map(route => (route.id === id ? { ...updatedRoute, id } : route));
};

// Delete an existing route
export const deleteRoute = (routes, id) => {
    return routes.filter(route => route.id !== id);
};
