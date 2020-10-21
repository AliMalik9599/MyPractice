import React, {Component} from "react";
import CourseList from "../../components/CourseList/CourseList";
import Selection from "../Selection/Selection";

const courseViewEnum = {
    COURSESELECT: 0,
    SKILLSELECT: 1,
    DECK: 2
}

class CourseWrapper extends Component {
    constructor(props) {
        super(props);
        this.selectedSkills = [];
    }

    state = {
        courses: [],
        skills: [],
        selectedCourse: 0,
        view: courseViewEnum.COURSESELECT
    }

    handleCourseClick(e, value) {
        this.setState({
            view: courseViewEnum.SKILLSELECT,
            selectedCourse: value
        });
    }

    addSkill(e, skill) {
        console.log(skill);
        this.selectedSkills.push(skill); //does not trigger a re-render
    }

    handleDonePress() {
        this.setState({
            skills: this.selectedSkills,
            view: courseViewEnum.DECK
        });
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/courses/')
            .then(response => response.json())
            .then(data => {
                this.setState({courses: data});
            });
    }

    render() {
        let view = null;
        switch(this.state.view) {
            case courseViewEnum.COURSESELECT:
                view = (<div>
                            <p>What would you like to work on today?</p>
                            <div className="d-flex justify-content-center">
                                <CourseList courses={this.state.courses}
                                            clickHandler={this.handleCourseClick.bind(this)}
                                />
                            </div>
                        </div>)
                break;
            case courseViewEnum.SKILLSELECT:
                view = <Selection skills={this.state.skills}
                                  skillUpdate={this.addSkill.bind(this)}
                />
                break;
        }
        return (
            <main>
                {view}
            </main>
        )
    }
}

export default CourseWrapper;