const employee = [
    {
        "Id": 1,
        "Firstname": "Ujalakhan",
        "Email": "Ujalakhan@email.com",
        "Password": "123",
        "tasks": [
            {  
                "ids":"100",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage layout.",
                "taskDate": "2025-02-10",
                "category": "UI/UX"
            },
            {
                "ids":"101",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve login authentication issue.",
                "taskDate": "2025-02-05",
                "category": "Backend"
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "Id": 2,
        "Firstname": "Muskankhan",
        "Email": "Muskankhan@email.com",
        "Password": "123",
        "tasks": [
            {
                "ids":"102",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Write API Docs",
                "taskDescription": "Document API endpoints and usage.",
                "taskDate": "2025-02-12",
                "category": "Documentation"
            },
            {
                "ids":"103",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Test Payment Gateway",
                "taskDescription": "Verify PayPal and Stripe integrations.",
                "taskDate": "2025-02-15",
                "category": "Testing"
            },
            {
                "ids":"104",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Refactor Dashboard",
                "taskDescription": "Improve dashboard performance.",
                "taskDate": "2025-01-30",
                "category": "Frontend"
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "Id": 3,
        "Firstname": "ShaikhBilal",
        "Email": "ShaikhBilal@email.com",
        "Password": "123",
        "tasks": [
            {
                "ids":"105",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Deploy to AWS",
                "taskDescription": "Migrate application to AWS cloud.",
                "taskDate": "2025-02-08",
                "category": "DevOps"
            },
            {
                "ids":"106",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize Database",
                "taskDescription": "Reduce query response time.",
                "taskDate": "2025-02-14",
                "category": "Database"
            },
            {
                "ids":"107",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Make Landing Page",
                "taskDescription": "Make a Landing page and integrate API with the help of ReactJS/ NextJS",
                "taskDate": "2025-02-20",
                "category": "Frontent"
            },
            {
                "ids":"108",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix 404 Error",
                "taskDescription": "Resolve missing page issue.",
                "taskDate": "2025-02-06",
                "category": "Backend"
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
    },
    {
        "Id": 4,
        "Firstname": "WaleedNiazi",
        "Email": "WaleedNiazi@email.com",
        "Password": "123",
        "tasks": [
            {
                "ids":"109",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement Dark Mode",
                "taskDescription": "Add dark mode toggle to settings.",
                "taskDate": "2025-02-16",
                "category": "Frontend"
            },
            {
                "ids":"110",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update API Security",
                "taskDescription": "Enhance API security protocols.",
                "taskDate": "2025-01-29",
                "category": "Security"
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
    },
    {
        "Id": 5,
        "Firstname": "Maheenkhan",
        "Email": "Maheenkhan@email.com",
        "Password": "123",
        "tasks": [
            {
                "ids":"111",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Integrate Chat System",
                "taskDescription": "Develop real-time chat feature.",
                "taskDate": "2025-02-07",
                "category": "Fullstack"
            },
            {
                "ids":"112",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Improve SEO",
                "taskDescription": "Optimize site for better search rankings.",
                "taskDate": "2025-02-18",
                "category": "Marketing"
            }
        ],
        "taskNumbers": { "active": 1, "newTask": 1, "completed": 0, "failed": 1 }
    }
];


const admin = [
    {
        "Id": 1,
        "Firstname": "admin",
        "Email": "admin@gmail.com",
        "Password": "123"
    }
];

// jab kabhi galti sai local storage ka data delete hojye to 214 sai 221 tak comment karo or
//  203 sai 212 tak comment hatao phir data jaye to wapis comment karo or nechai walai code 
// ka comment hatado
 
// export const setlocalstorageitem = () => {
//     // if (employees) {
//     //     localStorage.setItem("employees", JSON.stringify(employees));
//     // }
//     // if (admins) {
//     //     localStorage.setItem("admin", JSON.stringify(admins));
//     // }
//     localStorage.setItem("employees", JSON.stringify(employee));
//     localStorage.setItem("admin", JSON.stringify(admin));
// };

export const setlocalstorageitem = (employees, admins) => {
    if (employees) {
        localStorage.setItem("employees", JSON.stringify(employees));
    }
    if (admins) {
        localStorage.setItem("admin", JSON.stringify(admins));
    }
};
export const getlocalstorageitem = ()=>{
     const employeedata = JSON.parse(localStorage.getItem("employees"))
     const admindata = JSON.parse(localStorage.getItem("admin"))
    //  console.log(employeedata,admindata);
    return {employeedata,admindata}
     
}