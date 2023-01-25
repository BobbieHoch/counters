
import { useState } from "react";
import "../css/UpDownCounter.css"



export function UpDownCounter() {
      const [counter, setCounter] = useState<number>(0);


    return (
    
        <div className="UpDownCounter">
            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <input type="number" value={counter} />
            <button onClick={() => setCounter(counter - 1)}>Down</button>
        </div>

    )
}
