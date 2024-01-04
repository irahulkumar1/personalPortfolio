import earningBeatsImage from '../../assets/workSampleImg/earningBeats.jpeg';
import Zamplia from '../../assets/workSampleImg/zamplia.jpeg';
import GameDashboard from '../../assets/workSampleImg/gameDashboard.png';
// company logo
import NmsGames from '../../assets/CompanyLogo/1639239287191.jpeg'
import PandoIndia from '../../assets/CompanyLogo/LogoPando.fdd261119702b077a65f.png'

export const projects = [
  {
    name: 'Earning Beats',
    image: earningBeatsImage,
    link: 'https://www.earningsbeats.com/',
    githubLink: '',
    tags: ['React', 'TypeScript', 'Tanstack Query', 'Tailwind', 'Node.js', 'MySQL'],
    features : ['Protected Routes', 'Lazy Loading', 'Role Beased Access Control (RBAC)', 'Dynamic Routing'],
    organisationWorkedWith: "Pando India Software Consultants",
    organisationLogo: PandoIndia,
    description: "Earning Beats is a visual stock market analyser. It helps portfolio managers make trade recommendations for their clients.",
  },
  {
    name: 'Zamplia',
    image: Zamplia,
    link: 'https://zamplia.com/',
    githubLink: '',
    tags: ['HTML', 'CSS', 'JavaScript', "React.Js", "Redux.JS"],
    features :[''],
    organisationWorkedWith: "Pando India Software Consultants",
    organisationLogo: PandoIndia,
    description: "This online survey app integrates multiple vendors (Dynata, Voxco, Precision, Tap Research, Market Cube) providing diverse audience segments with varying qualifications, age groups, and more.",
  },
  {
    name: 'Game Dashboard',
    image: GameDashboard,
    link: '',
    tags: ['React.JS', 'javaScript', 'Node.JS', 'MySql'],
    features :[''],
    organisationWorkedWith: "NMS Games Private Limited",
    organisationLogo: NmsGames,
    description: 'I transitioned a PHP-based dashboard into a contemporary React.js application. This dashboard serves as a management interface for game app owners, enabling them to efficiently manage their Android game app. Through this web-based dashboard, administrators can conduct various tasks such as updating, verifying, and authenticating users via Aadhar details. Additionally, they have the ability to perform actions such as blocking users, as well as checking and managing user details, including points, currency, and status, among other functionalities.',
  },
];
