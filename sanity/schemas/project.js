


export default{
    name: 'project',
    title: 'Project',
    type: 'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name:"webUrl",
            title:"Website URL",
            type:"url"
        },
        {
            name:"techStack",
            title:"Tech Stack",
            type:"array",
            of:[
                {

                    type:"string"
                }
            ]
            
        },
       
        {
            name:"desc",
            title:"Desc",
            type:"text"
        },
        {
            name:"responsiblity",
            title:"Responsiblity",
            type:"text",
            
        },
        {
            name:"achievments",
            title:"Achievments",
            type:"array",
            of:[
                {
                    
                    type:"text"
                }
            ]
            
        },
        {
            name:"projectImage",
            title:"Project Image",
            type:"array",
            of:[
                {
                    title: 'Project Images',
                    type: 'object',
                    fields: [
                      {
                        title: 'Image',
                        name: 'image',
                        type: 'image'
                      } ,
                      {
                        title: 'Title',
                        name: 'title',
                        type: 'string'
                      } 
                    ]
                  }
            ]
        }
    ]
}