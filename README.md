React Redux MUI Table and MindMap Project

    This project demonstrates how to fetch data from the JSONPlaceholder API, display it in a responsive Material-UI (MUI) table, and visualize 
    it as a mindmap using React Flow. The project uses Redux for state management and React Router for navigation.

Installation :

    1. Clone the repository ( git clone https://github.com/tyson0911/ArcTechLabsTest )
    2. Install dependencies ( npm install )
    3. Run the development server ( npm run dev )
    
Features : 

    Fetch Data from API:

        Fetches a list of posts from the JSONPlaceholder API using async/await.

    Responsive MUI Table:

        Displays the fetched data in a responsive table.

        The table takes half the screen width on laptops and full width on mobile screens.

    MindMap Visualization:

        Displays the data as a hierarchical mindmap using react-flow-renderer and dagre for layout.

        Nodes are organized in a clean and readable structure.

    Navigation:

        Uses React Router to switch between the table view (/) and the mindmap view (/mindmap).

        Includes a "Go Back to Table" button in the mindmap view for easy navigation.

    Redux State Management:

        Uses Redux Toolkit to manage the state of the fetched data.

Technologies Used

    React: A JavaScript library for building user interfaces.

    Vite: A fast build tool for modern web applications.

    Material-UI (MUI): A popular React UI framework for building responsive and attractive components.

    Redux Toolkit: A library for managing global state in React applications.

    React Router: A library for handling routing in React applications.

    React Flow: A library for building interactive node-based graphs and mindmaps.

    Dagre: A library for calculating hierarchical layouts for graphs.

    Axios: A library for making HTTP requests.
