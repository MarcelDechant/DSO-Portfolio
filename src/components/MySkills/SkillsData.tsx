import HtmlLogo from "../../assets/skillsimgs/html.svg";
import CssLogo from "../../assets/skillsimgs/CSS.svg";
import DocuLogo from "../../assets/skillsimgs/docu.svg";
import PythonLogo from "../../assets/skillsimgs/python.svg";
import ShellLogo from "../../assets/skillsimgs/shell.svg";
import YamlLogo from "../../assets/skillsimgs/yaml.svg";
import DockerLogo from "../../assets/skillsimgs/docker.svg";
import GithubLogo from "../../assets/skillsimgs/CICD.svg";
import SecLogo from "../../assets/skillsimgs/seclogo.png";

export interface Skill {
  name: string;
  logo: any; // ReactComponent oder string (PNG)
  isSvg: boolean;
  descHead: string;
  descText: string[];
}

export const skillsData: Skill[] = [
 {
    name: "HTML",
    logo: HtmlLogo,
    isSvg: true,
    descHead: "How I used this skill",
        descText: [
      "Semantic and accessible markup",
      "Responsive page structures",
      "Forms, navigation and content layouts",
      "Clean and maintainable HTML structure",
    ],
  },
  {
    name: "CSS",
    logo: CssLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText: [
      "Modern layouts with Flexbox and Grid",
      "Responsive design for all screen sizes",
      "Hover effects and animations",
      "Clean and scalable styling",
    ],
  },
  {
    name: "Static site generator",
    logo: DocuLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText: [
      "Building fast static websites",
      "Content structuring and customization",
      "Tags, categories and RSS feeds",
      "Basic multilingual support",
    ],
  },
  {
    name: "Python",
    logo: PythonLogo,
    isSvg: true,
    descHead: "How I used this skill",
        descText: [
      "Building small APIs and scripts",
      "Test automation",
      "Data processing and filtering",
      "Basic backend logic",
    ],
  },
  {
    name: "Shell scripting",
    logo: ShellLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText: [
      "User and permission management",
      "Automation with scripts",
      "Working with loops and conditions",
      "Task and system automation",
    ],
  },
  {
    name: "Yaml",
    logo: YamlLogo,
    isSvg: true,
    descHead: "How I used this skill",
     descText: [
      "CI/CD configuration files",
      "Environment and app configuration",
      "Kubernetes and deployment files",
      "Readable structured data",
    ],
  },
  {
    name: "Container",
    logo: DockerLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText: [
      "Containerizing applications",
      "Local development environments",
      "CI/CD pipelines",
      "Automated builds and deployments",
    ]
  },
  {
    name: "CI/CD with GitHub Actions",
    logo: GithubLogo,
    isSvg: true,
    descHead: "How I used this skill",
    descText: [
      "Automated builds and tests",
      "Deployment workflows",
      "Reusable GitHub Actions",
      "Improving development efficiency",
    ],
  },
  {
    name: "IT Security",
    logo: SecLogo,
    isSvg: false,
    descHead: "How I used this skill",
    descText: [
      "Identifying vulnerabilities",
      "Authentication and authorization basics",
      "Security best practices",
      "Awareness of common attack vectors",
    ],
  },
];