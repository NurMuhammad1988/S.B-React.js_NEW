

// import { useEffect, useState } from "react";
// import "./counter-item.css";

// const CounterItem = ({ counterCenerate }) => {
//     const [item, setItem] = useState([]); //bo'sh massiv qaytaradi deb aytib qo'yildi[]

//     useEffect(() => {
//         const newItem = counterCenerate();
//         setItem(newItem); //newItemga tenglashtirish
//     }, [counterCenerate]);

//     return (
//         <div className="text-white">
//             <h1>Counter Items</h1>

//             <ul>
//                 {item.map((item) => (
//                     <li key={item}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CounterItem;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import "./counter-item.css";

const CounterItem = ({ counterCenerate }) => {
    const [item, setItem] = useState([]); //bo'sh massiv qaytaradi deb aytib qo'yildi[]

    useEffect(() => {
        const newItem = counterCenerate();
        setItem(newItem); //newItemga tenglashtirish
        console.log("Render...");
    }, [counterCenerate]);

    return (
        <div className="text-white">
            {/* <h1>Counter Items</h1> */}

            <ul>
                {item.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CounterItem;

