import { useRouter } from "next/router";
import {
  LeftSection,
  RightSection,
  Image,
} from "../styles/PageStyles/App.styles";
import { Section, SectionTitle, SectionText } from "../styles/GlobalComponents";
import { FancyButton } from "../styles/GlobalComponents/Button";

export default function Home() {
  const router = useRouter();

  return (
    <Section row>
      <LeftSection>
        <SectionTitle main>Welcome to Bideo Website</SectionTitle>
        <SectionText>
          This is an interactive format of blog known as Bideo, which is the
          combo of Blog and Video Format. This is a kind of PowerPoint
          Presentation Blog. This bideo website allows users to learn blogs in
          an interactive format.
        </SectionText>
        <FancyButton
          onClick={() => router.push(`/articles`)}
          variant="outlined"
        >
          Learn More..
        </FancyButton>
      </LeftSection>
      <RightSection>
        <Image src="/images/blog2.png" alt="Blog Picture" />
      </RightSection>
    </Section>
  );
}
