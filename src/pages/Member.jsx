import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { apiBaseUrl } from "../lib/config";

function ShowProject() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get(apiBaseUrl + "/member").then((response) => {
            setProjects(response.data);
        });
    }, []);
    return projects.length > 0 ? (
        projects.map((value, keys) => {
            return (
                <div key={keys}>
                    <span className="bg-black text-white p-1 rounded-l ml-1 border inline-block my-1">{value.name}</span>
                    <span className="border border-black p-1 rounded-r">{value.descript}</span>
                </div>
            );
        })
    ) : (
        <div>emty data</div>
    );
}

function Member(props) {
    return (
        <main>
            <div>Member</div>
            <ShowProject />
        </main>
    );
}
export default Member;
