const MyProjects = [
    {
        id: 1,
        title: 'What\'cha Makin\'?', 
        synopsis: `This API app is designed to allow users to query the FDA's food database, and then use it to construct different recipes.`,
        image: '/images/Lunch.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Axios', 'Node.js'],
        link: 'https://lunch-project-2-ga.herokuapp.com/',
        nextSteps: ''
    },
    {
        id: 2,
        title: 'Hnefetafl', 
        synopsis: 'A two player board game based on the ancient Viking table game, which was a precursor to chess. Attackers attempt to win by killing the king and defenders attempt to get the king to the corners for escape.',
        image: '/images/hnefetafl.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
        link: 'https://damatoaj.github.io/Project_one_Viking_game/',
        nextSteps: ''
    },
    {
        id: 3,
        title: 'Exercise Volume Tracker',
        synopsis: 'A full-stack application using an SQL database that allows users to track their volume (heart rate multiplied by minutes), and graph the data over time.',
        image: '/images/volume_tracker.png',
        technologies: ['PostGres', 'HTML', 'CSS', 'JavaScript', 'React-Bootstrap', 'Next.js'],
        link: 'https://volume-tracker-ga.herokuapp.com/',
        nextSteps: ''
    },
    {
        id: 4,
        title: 'Spotif-why?',
        synopsis: 'This app allows users to search from songs from the Spotify API and then save them into playlists.',
        image: '/images/spotifwhy.png',
        technologies: ['MongoDB', 'React', 'Node.js', 'Express'],
        link: 'https://spotify-project.netlify.app/',
        nextSteps: ''
    },
    {
        id: 5,
        title: 'TRKR',
        synopsis: 'This app assists job hunters by syncing data across multiple job-board websites, and allows the user to store and track them all in one place.',
        image: '/images/TRKR.png',
        technologies: ['React', 'GraphQL', 'React-Bootstrap', 'SQL'],
        link: 'https://www.trkr.dev/',
        nextSteps: 'Fully connecting the back and front ends, and scaling for millions of users'
    }
]

export default MyProjects;