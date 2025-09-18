export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: {
    liveDemo: string;
    sourceCode: string;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}