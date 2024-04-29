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
    stops: ["Stop 1", "Stop 2", "Stop 3","Stop 4","Stop 5"],
    startPoint: "School A",
    endPoint: "School B",
    status: false,
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
                <p className="welcome-text">Welcome Home!</p>
            </div>
        </div>
        <Trip departure={trips[0].departure} arrival={trips[0].arrival}
        numStudents={trips[0].numStudents} maxNumberStudents={trips[0].maxNumberStudents}
        speedLimit={trips[0].speedLimit} stops={trips[0].stops}
        startPoint={trips[0].startPoint} endPoint={trips[0].endPoint} 
        status={trips[0].status}></Trip>
    </div>
    </>);
}
export default Home