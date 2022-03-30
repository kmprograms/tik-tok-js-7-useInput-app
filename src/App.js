import React from "react";
import {useInput} from "react-hanger";

/*
    Biblioteka react-hanger dostarcza bardzo dużo niesamowitych hooks.
    Przykładowo hook useInput pozwala bardzo prosto zarządzać stanem
    pola tekstowego <input/>.

    Więcej ciekawych hooks poznasz na moim szkoleniu Web Developer :)
    Odwiedź km-programs.pl
*/

export default function App() {
    const input = useInput('');
    return (
        <div className="container my-5">
            <div className="input-group">
                <span className="input-group-text">Username</span>
                <input
                    type="text"
                    aria-label="First name"
                    value={input.value}
                    onChange={input.onChange}
                />
            </div>
            <div className="alert alert-success my-4" role="alert">
                <p>{input.value}</p>
            </div>
        </div>
    );
}
