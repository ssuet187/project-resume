import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData,AcademicData,Certification,projects,activities,languages} from "../data/page-data";
import ProfessionalExperience from "./component/professional-experience";
import Academic from "./component/Academic";
import Certificate from "./component/certificates";
import Project from "./component/projects";
import CurriAct from "./component/curriact";
import Languages from "./component/language";
const page = () => {
	return (
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
			<Academic data={AcademicData}/>
			<Certificate data={Certification}/>
			<Project data={projects}/>
			<CurriAct data={activities}/>
			<Languages data={languages}/>
		</div>
	);
};

export default page;
