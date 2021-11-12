import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import Footer from '../../components/Footer';
import Layout from '../../components/Utils/Layout';
import Section from '../../components/Utils/Section';
import TeamMember from './TeamMember';

const TeamPage = () => (
  <Layout style={{ paddingTop: '10vh' }}>
    <Section>
      <Section.Title>Team</Section.Title>
      <Section.Body>
        <Container>
          <Col xs={12} md={{ span: 8, offset: 2 }} className="mb-5">
            {<Image 
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              style={{ borderRadius: '1em'}} 
              src={`/img/team/team.jfif`} 
              fluid />}
          </Col>
          <hr className="py-3" style={{ width: '50%' }} />
          <TeamMember
            name="Lorenzo Magnaye"
            position="Co-Coordinator"
            year="Senior"
            major="Materials Science and Engineering with a Minor in Chemistry"
            bio="Lorenzo Magnaye, or Renzo, is currently a Senior studying Materials Science and Engineering with a minor in Chemistry. He has previously served as Team FACT Manager and Co-Awareness chair during his time in PSA UIUC. In the field of Materials Science, he is specifically interested in polymers and soft materials and he conducts research on this field as part of the Hutchens Dynamic Soft Materials Mechanics Lab at UIUC. He is part of the Illinois Engineering Ambassadors, a professional outreach program sponsored by the university to inspire kids who are underrepresented in engineering fields to pursue engineering degrees. He also works as a Student Assistant for the Engineering Library and for the Materials Science and Engineering Department. During his free time, he loves lifting, recreating his favorite food at home, playing basketball, and following sports. Renzo is excited to coordinate this year's FACT Conference and inspire community building within the Filipino-American community and other minority communities with FACT Pack and his co-chair Myka."
            imageURL="/img/team/LorenzoMagnaye.jfif"
          />
          <TeamMember
            name="Myka Padilla"
            position="Co-Coordinator"
            year="Senior"
            major="Molecular and Cellular Biology with a Minor in Global Health"
            bio="Myka is a Senior in Molecular and Cellular Biology with a focus on Cell and Developmental Biology. She plans to pursue a career in healthcare as she is passionate about health equity and social determinants of health. In her free time, you can find her representing the University of Illinois at Urbana-Champaign as a Student Alumni Ambassador, volunteer at Carle Hospital, or a Beckwith Personal Assistant for students with disabilities. To unwind, Myka loves listening to podcasts, cooking, and spending quality time with her friends. As a proud Filipino-American, Myka is honored to be FACT Co-Coordinator and is excited to showcase the efforts her and her FACT Pack have accomplished during the pandemic. Despite the rise in anti-POC sentiments, Myka hopes that this year’s delegates feel empowered within their cultural identities and stand in solidarity with other marginalized communities."
            imageURL="/img/team/MykaPadilla.jpg"
          />
          <TeamMember
            name="Renzo Ledesma"
            position="Team FACT Manager"
            year="Junior"
            major="Computer Science + Music"
            bio="Renzo Ledesma is currently a Junior studying Computer Science + Music, interested in using technology and music to make a positive impact on people's lives. Throughout college, they've been involved with PSA by dancing and creating music for Barkada, managing websites and infrastructure as Webmaster, and now bringing together the Filipino-American community as Team FACT Manager for this year's FACT! Outside of PSA, they spend time developing software for various projects at UIUC, producing and writing music, and playing any piano they can on campus. They're excited to make FACT as smooth and exciting as possible with the help of Team FACT!"
            imageURL="/img/team/RenzoLedesma.jfif"
          />
          <TeamMember
            name="Mark William Casco"
            position="Team FACT Manager"
            year="Junior"
            major="Interdisciplinary Health Sciences"
            bio="Mark is a Junior majoring in Interdisciplinary Health Sciences with aspirations to attain a career in the health field. As former Athletic Chair and current VPE, he is enthusiastic and detailed when it comes to event planning, whether it’s within the PSA community, alongside the APAC student organizations, the FAAECI community, or among the intercollegiate Fil-Am student orgs. Two disciplines that he loves to emphasize are (1) to be real & the best version of yourself, and that (2) whether we choose to rise from our struggles or meddle in our misery, the same time will pass- time will not wait. For leisure, he loves lifting, recreational volleyball and soccer, and improv guitar to R&B."
            imageURL="/img/team/MarkWilliamCasco.jfif"
          />
          <TeamMember
            name="Abby Masucol"
            position="Variety Show Coordinator"
            year="Junior"
            major="English and Creative Writing"
            bio="Abby is currently a Junior at UIUC double majoring in English with a concentration in Media Cultures and Creative Writing. She's been involved in PSA since her freshman year, from dancing in Barkada for FACT and Battle of the Bamboo in 2019 to leading in the officer board as Filipino Culture Night Co-Coordinator in 2020. Abby has always enjoyed telling stories through creative mediums, whether that be in short novellas, poems, or even screenwriting drafts. She strives to write the stories that matter, stemming from her desire for more Filipino representation in popular media and the influence of her friends and family, whose thoughts and lessons resonate within her everyday life. As the current Variety Show Co-Coordinator, she is eager to find unique acts and talented, hardworking individuals and groups to feature in FACT’s V-Show alongside her co and roommate, Angela. In her free time, she enjoys longboarding around campus, watching movies, and curling up with a book in hand or journaling before bedtime."
            imageURL="/img/team/AbbyMasucol.jfif"
          />
          <TeamMember
            name="Angela Cabrera"
            position="Variety Show Coordinator"
            year="Junior"
            major="Molecular and Cellular Biology with a Minor in Psychology"
            bio="Angela is currently a Junior at the University of Illinois at Urbana-Champaign majoring in Molecular and Cellular Biology and minoring in Psychology on the pre-medicine track. Passionate about sharing her Filipino Culture, Angela became involved in the Philippine Student Association through becoming a member of Barkada; she performed during FACT 2019 and competed in Battle of the Bamboo 2020. During her sophomore year, she became an officer of PSA’s 2020-2021 Board as Formal Chair. Outside of PSA, she is a member of the executive board for MCB Leaders, a member of the Professional Pre-Medical Fraternity, Phi Delta Epsilon, and conducts research at the RIPE Lab at UIUC. As a FACT Variety Show Co-Coordinator this year, she is driven to host a memorable V-Show with her Co, Abby, that showcases the amazing talents of individuals throughout the nation and emphasizes our strength in unity."
            imageURL="/img/team/AngelaCabrera.jfif"
          />
          <TeamMember
            name="Janine Pasquali"
            position="Hospitality"
            year="Senior"
            major="Economics with a Minor in Spanish"
            bio="Janine is currently a UIUC Senior studying Economics and Spanish. As former social chair and treasurer of PSA, she is excited to finally be more involved with FACT as this year's co-hospitality chair. In her free time she enjoys embroidering for her friends, cooking pasta, and playing The Sims 4. She is looking forward to a fun FACT weekend with friends and fresh faces!"
            imageURL="/img/team/JaninePasquali.jfif"
          />
          <TeamMember
            name="Francis Fabian"
            position="Hospitality"
            year="Junior"
            major="Economics and Philosophy"
            bio="Francis Fabian is a rising Junior in Economics and Philosophy and one day hopes to be a lawyer. He feels a little bad about not being active in PSA over the pandemic and is excited to be working with FACT! Outside of PSA he enjoys watching anime and sitcoms, listening to K-pop girl groups, playing League of Legends, and running Dungeons and Dragons."
            imageURL="/img/team/FrancisFabian.jfif"
          />
          <TeamMember
            name="Melencio Sanidad"
            position="Conference Ambassador"
            year="Senior"
            major="Integrative Biology"
            bio="Melencio has been involved with PSA since Freshman year and was also a part of last year's FACT Pack as a Campus Ambassador. Other than being involved with PSA, he is also a member of Illini World Taekwondo. He is currently focusing on Entomology but is interested in a career with Wildlife Ecology as well. He is looking forward to helping host another great online FACT and hopes you're just as excited as him!"
            imageURL="/img/team/MelencioSanidad.jfif"
          />
          <TeamMember
            name="Brion Nono"
            position="Conference Ambassador"
            year="Senior"
            major="Media and Cinema Studies"
            bio="Brion is a Senior studying Media and Cinema Studies. Although he never has homework he will find a way to procrastinate till last minute. Brion enjoys watching anime, movies, and playing video games. He is the biggest S I M P for TWICE and for Eula from Genshin Impact. Catch him with all the memes at FACT this year!"
            imageURL="/img/team/BrionNono.jfif"
          />
          <TeamMember
            name="Jazmin Aguilar"
            position="Marketing"
            year="Fifth Year Undergraduate"
            major="Industrial Design with a Minor in Art History and Kinesiology"
            bio="Jazmin was PSA’s 2019 Co-Cultural Chair who led Barkada to first place victory at the Battle of The Bamboo. During her free time, she works on commissioned pieces or draws for personal fun."
            imageURL="/img/team/JazminAguilar.jpg"
          />
          <TeamMember
            name="Emily Bautista"
            position="Marketing"
            year="Junior"
            major="Sustainable Design with a Minor in Psychology and Integrative Biology"
            bio="Emily is a Junior at UIUC, studying Sustainable Design and pursuing minors in Psychology and Integrative Biology. She hopes to learn more ways to make our landscapes more sustainable for people/animals biologically, economically, and socially. In her free time, she loves to draw, play video games, and hang out with friends. She is excited and cannot wait for FACT this year because she  knows for a FACT that it'll be great :)"
            imageURL="/img/team/EmilyBautista.jfif"
          />
          <TeamMember
            name="Nicolas Langtiw"
            position="Media"
            year="Junior"
            major="Kinesiology"
            bio="Nicolas Langtiw is currently a Junior at the University of Illinois Urbana-Champaign. He enjoys numerous activities such as playing volleyball/basketball, video games, taking photos or editing videos, and hanging out with his friends. He is excited to be able to be on FACT Pack and be a co-chair on the media portion side with Gio. He has high hopes for FACT this year and hopes to see you all there."
            imageURL="/img/team/NicolasLangtiw.jfif"
          />
          <TeamMember
            name='GioMarco Talavera'
            position='Media'
            year='Senior'
            major='Technical Systems Management with a Minor in Business and Agricultural Health & Safety'
            bio='Gio Marco, or Gio, is a Senior majoring in Technical Systems Management with minors in Business and Agricultural Health & Safety. His interests include jamming to music, taking photos, and playing basketball. He is currently working for the UIUC CITL&apos;s media resource team, where he developed an interest in filming. With the proper gear and YouTube by his side, he will learn all the tricks he needs to provide fun and exciting videos to showcase everyone&apos;s hard work and talent. He was previously involved in FACT 2019 as a photographer but now holds the position of Media co-chair. As Co-chairs with Nic, they aim to deliver breathtaking visuals to fully portray our Filipino culture.'
            imageURL='/img/team/GioMarcoTalavera.jfif'
          />
          <TeamMember
            name='Shayna Provine'
            position='Information Technology'
            year='Senior'
            major='Computer Science'
            bio='Shayna is a Senior studying Computer Science interested in the human and social impact of computing. She has previously worked at AWS Cryptography as a Software Development Engineer Intern and will be returning to Amazon in Summer 2022. She spends way too much time on Genshin Impact as staff for the Khaenri&apos;ah Lore Project and moderator for the r/Ganyu subreddit, not to mention that she has C6 Hu Tao. As IT Chair, she is excited to help the FACT experience go digital!'
            imageURL='/img/team/ShaynaProvine.jfif'
          />
        </Container>
      </Section.Body>
    </Section>
    <Footer />
  </Layout>
);
export default TeamPage;
