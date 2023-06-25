import "./App.css";
import { useEffect, useRef } from "react";

function Main({ setName }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const pressEnter = (e) => {
            if (e.key === "Enter") {
                setName(inputRef.current.value);
            }
        };

        window.addEventListener("keydown", pressEnter);

        return () => {
            window.removeEventListener("keydown", pressEnter);
        };
    }, []);

    return (
        <main>
            <input ref={inputRef} />
            {/* <button
                onClick={() => {
                    setName(inputRef.current.value);
                }}
            >Изменить имя</button> */}
        </main>
    );
}

export default Main;
