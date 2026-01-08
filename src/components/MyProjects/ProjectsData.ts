
import MinecraftImg from "../../assets/projectsimgs/Minecraft.png";

import WordPressImg from "../../assets/projectsimgs/Wordpress.png";

import TruckSignsImg from "../../assets/projectsimgs/Trucksign.png";

import BabyToolsImg from "../../assets/projectsimgs/Babytoolshop.png";

import JuiceShopImg from "../../assets/projectsimgs/juiceshop.png";

import YAML from "../../assets/projectsimgs/yamlblack.svg";
import SHELL from "../../assets/projectsimgs/shellblack.svg";
import PYTHON from "../../assets/projectsimgs/python.svg";
import ITSEC from "../../assets/projectsimgs/secLogo.png";
import CONTAINER from "../../assets/projectsimgs/docker.svg";

/* =====================
   Icon Types
===================== */

export type ProjectIcon =
  | {
      type: "svg";
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      title: string;
    }
  | {
      type: "img";
      icon: string;
      title: string;
    };

/* =====================
   Project Type
===================== */

export interface Project {
  id: number;
  title: string;
  description: string;
  img?: string;
  icons?: ProjectIcon[];
  doc: string;
  git?: string;
}

/* =====================
   Projects Data
===================== */

export const projects: Project[] = [
  {
    id: 1,
    title: "Baby Tools Shop",
    description:
      "Containerized e-commerce application for baby products. Demonstrates isolated environment benefits for deployment and scalability.",
    img: BabyToolsImg,
    icons: [
      { type: "svg", icon: SHELL, title: "Shell" },
      { type: "svg", icon: CONTAINER, title: "Container" },
    ],
    doc: "/docs/projects/baby-tools-shop",
    git: "https://github.com/MarcelDechant/baby-tools-shop",
  },
  {
    id: 2,
    title: "Truck Signs API",
    description:
      "Containerized REST API to ensure reproducible, isolated, and secure application execution.",
    img: TruckSignsImg,
    icons: [
      { type: "svg", icon: SHELL, title: "Shell" },
      { type: "svg", icon: PYTHON, title: "Python" },
      { type: "svg", icon: CONTAINER, title: "Container" },
    ],
    doc: "/docs/projects/truck-signs-api",
    git: "https://github.com/MarcelDechant/truck_signs_api",
  },
  {
    id: 3,
    title: "OWASP Juice Shop",
    description:
      "Deliberately insecure web application for learning offensive security techniques and improving protection of real-world apps.",
    img: JuiceShopImg,
    icons: [
      { type: "img", icon: ITSEC, title: "IT Security" },
      { type: "svg", icon: PYTHON, title: "Python" },
    ],
    doc: "/docs/projects/owasp-juice-shop",
    git: "https://github.com/MarcelDechant/Juice_shop",
  },
  {
    id: 4,
    title: "Minecraft Server",
    description:
      "Hosting and managing a Minecraft game server. Learn configuration, world settings, mods, and server responsibilities.",
    img: MinecraftImg,
    icons: [
      { type: "svg", icon: YAML, title: "YAML" },
      { type: "svg", icon: SHELL, title: "Shell Scripting" },
      { type: "img", icon: ITSEC, title: "IT Security" },
      { type: "svg", icon: CONTAINER, title: "Container" },
    ],
    doc: "/docs/projects/minecraft-server",
    git: "https://github.com/MarcelDechant/minecraft_server",
  },
  {
    id: 5,
    title: "WordPress Multi Container Setup",
    description:
      "Containerized WordPress blog environment. Quickly configure a reproducible setup for reliable deployment with minimal manual steps.",
    img: WordPressImg,
    icons: [
      { type: "svg", icon: SHELL, title: "Shell Scripting" },
      { type: "svg", icon: CONTAINER, title: "Container" },
      { type: "img", icon: ITSEC, title: "IT Security" },
    ],
    doc: "/docs/projects/wordpress-multi-container-setup",
    git: "https://github.com/MarcelDechant/Wordpress_docker",
  },
];