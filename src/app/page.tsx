import { ActivityItem } from "@/components/ActivityItem";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { SocialButton } from "@/components/SocialButton";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiGlobalLine,
  RiArrowRightLine,
} from "react-icons/ri";

const SOCIAL_ICON_SIZE = 20;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-2 px-2 pb-16 sm:pt-4 ">
      <Section className="border-b border-gray-200">
        <div className="flex flex-col gap-1 sm:flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Aleksandr Lesnenko</h1>
            <span className="text-slate-800">Software Engineer</span>
          </div>

          <div className="flex gap-0.5 flex-row-reverse justify-between sm:justify-start sm:flex-col">
            <div className="flex ml-0 sm:ml-auto items-center space-x-1">
              <SocialButton url="https://github.com/alxnddr">
                <RiGithubFill size={SOCIAL_ICON_SIZE} />
              </SocialButton>
              <SocialButton url="https://www.linkedin.com/in/lesnenko/">
                <RiLinkedinFill size={SOCIAL_ICON_SIZE} />
              </SocialButton>
              <SocialButton url="https://twitter.com/a_lesnenko">
                <RiTwitterFill size={SOCIAL_ICON_SIZE} />
              </SocialButton>
            </div>
            <div className="flex text-sm items-center text-slate-800">
              <RiGlobalLine className="mr-1" /> Montevideo, Uruguay
            </div>
          </div>
        </div>
      </Section>
      <Section className="border-b border-gray-200">
        <div className="text-sm text-gray-600">
          <div>Naturaleza: Empresa Unipersonal</div>
          <div>Contribuyente: 219368720016</div>
          <div>Fecha Inicio: 01/02/2023</div>
        </div>
      </Section>
      <Section title="Skills" className="border-b border-gray-200">
        <div className="text-gray-600 text-sm">
          React, Typescript, Javascript, HTML, CSS, D3.js, visx, Redux, Apollo,
          GraphQL, NodeJS, Cypress, Github Actions, Webpack, Docker
        </div>
      </Section>
      <Section title="Experience" className="border-b border-gray-200">
        <div className="flex flex-col gap-2">
          <ActivityItem
            title="Metabase"
            details={
              <>
                Senior Frontend Engineer <RiArrowRightLine className="inline" />{" "}
                Engineering Lead
              </>
            }
            startYear={2021}
          />

          <ActivityItem
            title="Toptal (Core Team)"
            details={
              <>
                Senior Frontend Engineer <RiArrowRightLine className="inline" />{" "}
                Team Lead
              </>
            }
            startYear={2019}
            endYear={2021}
          />

          <ActivityItem
            title="Wrike"
            details="Senior Frontend Engineer"
            startYear={2016}
            endYear={2019}
          />

          <ActivityItem
            title="Epam Systems"
            details="Software Engineer"
            startYear={2016}
            endYear={2016}
          />

          <ActivityItem
            title="Arcadia"
            details="Software Engineer"
            startYear={2015}
            endYear={2016}
          />

          <ActivityItem
            title="Pravo.ru"
            details="Software Engineer"
            startYear={2014}
            endYear={2015}
          />
        </div>
      </Section>

      <Section title="Education" className="border-b border-gray-200">
        <ActivityItem
          title="Samara State Technical University"
          details="Computer Information Systems — Bachelor's and Master's degree"
          startYear={2009}
          endYear={2014}
        />
      </Section>

      <Section title="Links">
        <ul className="list-disc pl-4 flex flex-col gap-2 text-sm">
          <li>
            <Link href="https://www.toptal.com/remote-work-playbook">
              Toptal — The Suddenly Remote Playbook
            </Link>
          </li>
          <li>
            <Link href="https://javascript.plainenglish.io/how-to-create-a-waterfall-chart-in-react-with-visx-51ed1721dc77">
              How to Create a Waterfall Chart in React With visx
            </Link>
          </li>
          <li>
            <Link href="https://javascript.plainenglish.io/the-benefits-of-using-dev-containers-for-local-development-3bb8f78b800">
              The Benefits of Using Dev Containers for Local Development
            </Link>
          </li>
          <li>
            <Link href="https://dev.to/alxnddr/electron-vs-tauri-for-your-next-project-2dna">
              Electron vs Tauri for your next project
            </Link>
          </li>
        </ul>
      </Section>
    </main>
  );
}
