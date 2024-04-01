import {promises as fs} from 'fs';

export default async function ProjectsPage({params}){
    const file = await fs.readFile(process.cwd() + "/src/app/data/projects.json", 
                                    "utf8");
    const data  = JSON.parse(file);
    const projects = Object.keys(data.projects).map((obj,i) => {
        if(data.projects[obj].projectId == params.id){
            console.log("checking id filter", data.projects[obj]);
            return data.projects[obj]
        }
    });
    return(
        <><h1>{params.id}</h1><p>{data["projects"][0]["projectYear"]}</p></>
        
    );
}