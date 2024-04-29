import "./Home.css"
import Trip from "../Trip";
const trips =[{ //JSON object examples
    departure: {
        hour: 9,
        minute: 30,
        period: 'AM'
    },
    arrival: {
        hour: 2,
        minute: 15,
        period: 'PM'
    },
    numStudents: 20,
    maxNumberStudents: 30,
    speedLimit: 60,
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    startPoint: "School A",
    endPoint: "School B"
}];

const driver={  //JSON object example
    name: "Ahmed",
    Id: "#200428",
    mail: "ahmedsamersayed22@gmail.com",
    gender: "male",
    phone: "01090790791"
}


function Home(){
    return(<>
    <div className="home-container common">
        <div className="welcome-container">
            <div className="welcome">
                <h1 className="welcome-text">Welcome back, {driver.name} !</h1>
            </div>
        </div>
        <Trip departure={trips[0].departure}></Trip>
    </div>
    </>);
}
export default Home