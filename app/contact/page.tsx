import {
  LinkedinIcon,
  GitHubIcon,
  ResumeIcon,
  DevIcon,
  EmailMe,
  ArrowIcon,
} from "components/icons";

export const metadata = {
  name: "Adam Gonzalez",
  description: "Adam Gonzalez Website",
};

export default function ContactPage() {
  return (
    <section className="text-lg">
      <a
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        href="https://www.linkedin.com/in/adam-gonzalez-jr/"
      >
        <div className="flex items-center">
          <LinkedinIcon />
          <div className="ml-3">LinkedIn Profile </div>
        </div>
        <ArrowIcon />
      </a>
      <a
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        href="https://github.com/adamgonzo"
      >
        <div className="flex items-center">
          <GitHubIcon />
          <div className="ml-3">Github Profile </div>
        </div>
        <ArrowIcon />
      </a>
      <a
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        href="https://dev.to/megagon"
      >
        <div className="flex items-center">
          <DevIcon />
          <div className="ml-3">DevTo Profile </div>
        </div>
        <ArrowIcon />
      </a>
      <a
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        href="https://drive.google.com/file/d/1J7xjNSdQ4PgQqawjh9nyCzstYHRifF5X/edit?usp=share_link"
      >

        <div className="flex items-center">
          <ResumeIcon />
          <div className="ml-3">Resume </div>
        </div>
        <ArrowIcon />
      </a>
      <a
        href="mailto:AdamGonzalez-Jr@outlook.com&subject=collaboration"
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
      >
        <div className="flex items-center">
          <EmailMe />
          <div className="ml-3">Email For Collaboration </div>
        </div>
        <ArrowIcon />
      </a>
    </section>
  );
}
