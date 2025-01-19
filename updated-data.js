const portfolioData = {
    about: {
        greeting: "Hi, I'm Nemala Durga Viswanadh!",
        description: "I am a passionate and skilled iOS and macOS developer with a strong focus on creating seamless, high-performing applications using Swift, SwiftUI, and Objective-C, delivering smooth user experiences within Apple's ecosystem."
    },
    
    skills: [
        { category: "Languages", items: "Swift, Objective-C, SwiftUI" },
        { category: "Platforms", items: "iOS, iPadOS, macOS, tvOS" },
        { category: "UI/UX", items: "UIKit, SwiftUI, AppKit" },
        { category: "Web Services", items: "Swift Vapor" },
        { category: "Tools", items: "Xcode, Postman, PgAdmin, Filezilla" },
        { category: "APIs", items: "RESTful APIs" },
        { category: "Architecture", items: "MVC, MVVM" },
        { category: "Concurrency", items: "Swift Concurrency (async/await, GCD)" },
        { category: "Version Control", items: "Git" },
        { category: "Database", items: "CoreData, SQL Lite" }
    ],

    projects: [
        {
            title: "Timesheet",
            description: "Timesheet mobile is about preferred employee timekeeping and loca:on tracking app for builders, contractors, healthcare, security, transportation, event planners, anyone with mobile users.",
            technologies: ["Objective-C", "Swift", "CoreData", "UserNotifications", "iOS"],
            highlights: [
                "Integrated CoreData for efficient data persistence",
                "Gathered user feedback for continuous improvement and implemented new features based on feedback and business needs.",
                "Added local notifications for task reminders",
                "Created custom animations for smooth user experience",
                "Maintaining the code and resolve the Bugs/Issues."
            ],
            // appstoreUrl: "https://apps.apple.com/in/app/timesheet-mobile/id560462162",
            appstoreUrl: [
                {
                    name: "Timesheet",
                    url: "https://itunes.apple.com/in/app/timesheet-mobile/id560462162?mt=8",
                    icon: "fa-app-store"
                }
            ],
            previewImage: "projectIcons/timesheet.jpg"
        },
        {
            title: "RepsToBeat",
            description: "Reps to Beat is a game-changing Personal Training app that provides you with tailored workout plans or permits users to develop their own plan, based on your unique fitness goals, whether you're looking to build strength, power, hypertrophy, resistance, or just overall fitness.",
            technologies: ["Swift", "Autolayouts", "Pie Charts","iOS"],
            highlights: [
                "Developed user-friendly interfaces with Auto Layouts and Storyboards, ensuring a seamless user experience",
                "Collaborated eﬀectively with cross-func:onal teams, including designers and backend developers, in an Agile environment.",
                "Maintaining the code and resolve the Bugs/Issues."
            ],
            appstoreUrl: [
                {
                    name: "RepsToBeat",
                    url: "https://apps.apple.com/in/app/reps-to-beat/id1556616455",
                    icon: "fa-app-store"
                }
            ],
            previewImage: "projectIcons/repstobeat.jpg"
        },
        {
            title: "Your Moca",
            description: "A professional networking and talent hiring app for the film industry. The application provides users to find film industry jobs and provides a way to connect with filmmakers. The application also provides a way to connect with users through chat features.",
            technologies: ["Swift", "Custom Imagepicker", "Custom Animations", "iOS"],
            highlights: [
                "Designed and Implemented MVVM architecture for clean code separation",
                "Maintained detailed documentation and used Git for version control",
                "Collaborated with cross-functional teams including designers, backend developers, and project managers to deliver a cohesive product",
                "Gathered client feedback for continuous improvement and implemented new features based on feedback and business needs"
            ],
            appstoreUrl: [

            ],
            previewImage: "projectIcons/yourmoca.jpg"
        },
        {
            title: "Drylab",
            description: "Drylab is an easy-to-use platform for managing and sharing media files, designed by filmmakers. It lets you quickly find, organize, and download content from any device. You can share files for viewing or download without needing the recipient to log in. Drylab also uses AI to automatically tag images, making them easier to find.",
            technologies: ["Swift", "SwiftUI", "AppKit", "Folder monitoring", "macOS", "iOS", "tvOS"],
            highlights: [
                "Collaborated with cross-functional teams including backend developer and frontend developer to deliver a cohesive product",
                "Daily coordination with client regarding work status, blockages discussion and clarifying the doubts as it is a dedicated project",
                "Maintaining the code and resolve the Bugs/Issues",
                "Gathered client feedback for continuous improvement and implemented new features based on feedback and business needs"
            ],
            // appstoreUrl: "https://github.com/yourusername/file-organizer",
            appstoreUrl: [
                {
                    name: "Viewer",
                    url: "https://apps.apple.com/us/app/drylab-viewer/id1180623007",
                    icon: "fa-app-store"
                },
                {
                    name: "Set Report",
                    url: "https://apps.apple.com/in/app/set-report-3/id1523973857",
                    icon: "fa-app-store"
                },
                {
                    name: "Screening Room",
                    url: "https://apps.apple.com/in/app/drylab-screening-room/id1385554595",
                    icon: "fa-app-store"
                }
            ],
            previewImage: "projectIcons/drylab.jpg"
        }
    ],

    experience: [
        {
            period: "August 2022 - Present",
            title: "iOS and macOS Developer",
            company: "Krify Software Technologies",
            responsibilities: [
                "Designed and developed applications for iOS and macOS platforms using Swift, SwiftUI and Objective-C.",
                "Collaborated with cross-functional teams to define and implement new features.",
                "Conducted code reviews and provided constructive feedback to improve code quality and maintainability.",
                "Developed and executed XCTestCases for both existing and ongoing projects, ensuring robust and reliable code quality.",
                "Designed and implemented APIs using Swift Vapor, streamlining server-side functionality.",
                "Pioneered macOS and SwiftUI development within the company, establishing a foundation for future macOS and SwiftUI projects."
            ],
            technologies: ["Swift", "SwiftUI", "Objective-C", "iOS", "macOS", "Swift Vapor"]
        },
        {
            period: "March 2021 - May 2022",
            title: "iOS Developer",
            company: "SPGON Software Solutions LLP",
            responsibilities: [
                "Integrated third-party libraries and APIs to extend application functionality and improve performance.",
                "Participated in sprint planning, daily stand-ups, and retrospective meetings to ensure project milestones were met on time.",
                "Mentored junior developers, fostering a culture of continuous learning and knowledge sharing within the team."
            ],
            technologies: ["Objective-C", "Swift"]
        }
    ],

    education: [
        {
            period: "2015 - 2019",
            degree: "B.Tech. in Computer Science and Engineering",
            school: "K L University, Guntur",
            subjects: [
                "Data Structures & Algorithms",
                "Operating Systems",
                "Database Management System",
                "Computer Networks",
                "Compiler Designing",
                "Cryptography"
            ]
        },
        {
            period: "2013 - 2015",
            degree: "Intermediate (Class 12th)",
            school: "Board of Intermediate Education, Andhra Pradesh",
            subjects: ["Physics", "Chemistry", "Mathematics"]
        },
        {
            period: "2013",
            degree: "Class 10th",
            school: "Board of Secondary Education, Andhra Pradesh"
        }
    ],

    contact: {
        email: "durgaviswanadhnemala@gmail.com",
        phoneNumber:"+91 9133951393",
        message: "Feel free to reach out to me at:",
        social: [
            {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/nemala-durga-viswanadh/",
                icon: "fa-linkedin",
                class: "linkedin"
            },
            {
                platform: "GitHub",
                url: "https://github.com/viswa7893",
                icon: "fa-github",
                class: "github"
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/durga_viswanadh/",
                icon: "fa-instagram",
                class: "instagram"
            },
            {
                platform: "Medium",
                url: "https://medium.com/@durgaviswanadh",
                icon: "fa-medium",
                class: "medium"
            }
        ]
    }
};