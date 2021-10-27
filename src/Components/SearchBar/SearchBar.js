import React, {useState} from "react";
import styles from "./searchBar.module.scss";
import {Form} from "semantic-ui-react";

export const SearchBar = (props) => {
    const [userInput, setUserInput] = useState('')
    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = () => {
        props.searchUser(userInput)
    }

    return (
        <div className={styles.search}>
            <Form>
                <Form.Group>
                    <Form.Input  placeholder="Github user"  name="github-user" value={userInput} onChange={handleSearch}/>
                    <Form.Button content="Search" onClick={handleSubmit}/>
                </Form.Group>
            </Form>
        </div>
    )
}