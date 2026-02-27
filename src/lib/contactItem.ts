import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export type ContactItem = {
  title: string;
  value: string;
  href: string;
  external?: boolean;
  Icon: React.ElementType;
};

export const items: ContactItem[] = [
  {
    title: 'Email',
    value: 'Send me an email',
    href: 'mailto:martinekongsrud@outlook.com',
    Icon: EmailOutlinedIcon,
  },
  {
    title: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/martine-kongsrud',
    external: true,
    Icon: LinkedInIcon,
  },
  {
    title: 'GitHub',
    value: '@Martinekong',
    href: 'https://github.com/martinekong',
    external: true,
    Icon: GitHubIcon,
  },
];
