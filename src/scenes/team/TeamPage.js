import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import Footer from '../../components/Footer'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import TeamMember from './TeamMember'

const TeamPage = () => (
  <Layout style={{ paddingTop: '10vh'}}>
    <Section>
      <Section.Title>Team</Section.Title>
      <Section.Body>
        <Container>
          <Col xs={12} md={{ span: 10, offset: 1}} className='mb-5' >
{/*             <Image 
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              style={{ borderRadius: '1em'}} 
              src={`${process.env.PUBLIC_URL}/img/team/team.jpeg`} 
              fluid /> */}
          </Col>
          <hr className='col-xs-8 offset-cs-2 col-sm-6 offset-sm-3 p-3'/>
          <TeamMember
            name='Lorenzo Magnaye'
            position='Co-Coordinator'
            year='Senior'
            major='Materials Science and Engineering with a Minor in Chemistry'
            bio='Lorenzo Magnaye, or Renzo, is currently a Senior studying Materials Science and Engineering with minor in Chemistry. He has previously served as Team FACT Manager and Co-Awareness chair during his time in PSA UIUC. In the field of Materials Science, he is specifically interested in polymers and soft materials and he conducts research on this field as part of the Hutchens Dynamic Soft Materials Mechanics Lab at UIUC. He is part of the Illinois Engineering Ambassadors, a professional outreach program sponsored by the university to inspire kids who are underrepresented in engineering fields to pursue engineering degrees. He also works as a Student Assistant for the Engineering Library and for the Materials Science and Engineering Department. During his free time, he loves lifting, recreating his favorite food at home, playing basketball, and following sports. Renzo is excited to coordinate this year&apos;s FACT Conference and inspire community building within the Filipino-American community and other minority communities with FACT Pack and his co-chair Myka.'
            imageURL='/img/team/LorenzoMagnaye.jpg'
          />
          <TeamMember
            name='Myka Padilla'
            position='Co-Coordinator'
            year='Senior'
            major=''
            bio=''
            imageURL='/img/team/MykaPadilla.jpg'
          />
          <TeamMember
            name='Shayna Provine'
            position='Information Technology'
            year='Senior'
            major='Computer Science'
            bio=''
            imageURL='/img/team/ShaynaProvine.jpg'
          />
          <TeamMember 
            name='Renzo Ledesma'
            position='Team FACT Manager'
            year='Junior'
            major='Computer Science + Music'
            bio='Renzo Ledesma is currently a junior studying Computer Science + Music, interested in using technology and music to make a positive impact on people&apos;s lives. Throughout college, they&apos;ve been involved with PSA by dancing and creating music for Barkada, managing websites and infrastructure as Webmaster, and now bringing together the Filipino-American community as Team FACT Manager for this year&apos;s FACT! Outside of PSA, they spend time developing software for various projects at UIUC, producing and writing music, and playing any piano they can on campus. They&apos;re excited to make FACT as smooth and exciting as possible with the help of Team FACT!'
            imageURL='/img/team/RenzoLedesma.jpg'
          />
          <TeamMember 
            name='Mark William Casco'
            position='Team FACT Manager'
            year='Junior'
            major='Interdisciplinary Health Sciences'
            bio='Junior majoring in Interdisciplinary Health Sciences. Aspirations to attain a career in the health field. Former Athletic Chair and current VPE . I am enthusiastic and detailed when it comes to event planning, whether it’s within the PSA community, alongside the APAC student organizations, the FAAECI community, or among the intercollegiate Fil-Am student orgs. Two disciplines that I love to emphasize is (1) to be real & the best version of yourself, and that (2) whether we choose to rise from our struggles or meddle in our misery, the same time will pass- time will not wait. For leisure, I love lifting, recreational volleyball and soccer, and improv guitar to r&b.'
            imageURL='/img/team/MarkWilliamCasco.jpg'
          />
          <TeamMember
            name='Jazmin Aguilar'
            position='Marketing'
            year='Fifth Year Undergrad'
            major='Industrial Design, minoring in art history and kinesiology'
            bio='Jazmin was PSA’s 2019 co-cultural chair who led Barkada to first place victory at the Battle of The Bamboo. During her free time, she works on commissioned pieces or draws for personal fun.'
            imageURL='/img/team/JazminAguilar.jpg'
          />
          <TeamMember
            name='Emily Bautista'
            position='Marketing'
            year='Junior'
            major='Sustainable Design / Minoring in Psychology/Integrative Biology'
            bio='Emily is a junior at UIUC, studying Sustainable Design and pursuing minors in Psychology and Integrative Biology. She hopes to learn more ways to make our landscapes more sustainable for people/animals biologically, economically, and socially. In her free time, she loves to draw, play video games, and hang out with friends. She is excited and cannot wait for FACT this year because she  knows for a FACT that it&apos;ll be great :)'
            imageURL='/img/team/EmilyBautista.jpg'
          />
          <TeamMember
            name='Nicolas Langtiw'
            position='Media'
            year='Junior'
            major='Kinesiology'
            bio='Nicolas Langtiw is currently a Junior at the University of Illinois Urbana-Champaign. He enjoys numerous activities such as playing volleyball/basketball, video games, taking photos or editing videos, and hanging out with his friends. He is excited to be able to be on FACT Pack and be a co-chair on the media portion side with Gio. He has high hopes for FACT this year and hopes to see you all there.'
            imageURL='/img/team/NicolasLangtiw.jpg'
          />
          <TeamMember 
            name='Abby Masucol'
            position='Variety Show Coordinator'
            year='Junior'
            major='English and Creative Writing'
            bio='Abby is currently a junior at UIUC double majoring in English with a concentration in Media Cultures and Creative Writing. She&apos;s been involved in PSA since her freshman year, from dancing in Barkada for FACT and Battle of the Bamboo in 2019 to leading in the officer board as Filipino Culture Night Co-Coordinator in 2020. Abby has always enjoyed telling stories through creative mediums, whether that be in short novellas, poems, or even screenwriting drafts. She strives to write the stories that matter, stemming from her desire for more Filipino representation in popular media and the influence of her friends and family, whose thoughts and lessons resonate within her everyday life. As the current Variety Show Co-Coordinator, she is eager to find unique acts and talented, hardworking individuals and groups to feature in FACT’s V-Show alongside her co and roommate, Angela. In her free time, she enjoys longboarding around campus, watching movies, and curling up with a book in hand or journaling before bedtime.'
            imageURL='/img/team/AbbyMasucol.jpg'
          />
          <TeamMember 
            name='Angela Cabrera'
            position='Variety Show Coordinator'
            year='Junior'
            major='Major in Molecular and Cellular Biology; Minor in Psychology'
            bio='Angela is currently a junior at the University of Illinois at Urbana-Champaign majoring in Molecular and Cellular Biology and minoring in Psychology on the pre-medicine track. Passionate about sharing her Filipino Culture, Angela became involved in the Philippine Student Association through becoming a member of Barkada; she performed during FACT 2019 and competed in Battle of the Bamboo 2020. During her sophomore year, she became an officer of PSA’s 2020-2021 Board as Formal Chair. Outside of PSA, she is a member of the executive board for MCB Leaders, a member of the Professional Pre-Medical Fraternity, Phi Delta Epsilon, and conducts research at the RIPE Lab at UIUC. As a FACT Variety Show Co-Coordinator this year, she is driven to host a memorable V-Show with her Co, Abby, that showcases the amazing talents of individuals throughout the nation and emphasizes our strength in unity.'
            imageURL='/img/team/AngelaCabrera.jpg'
          />
          <TeamMember
            name='Janine Pasquali'
            position='Hospitality'
            year='Senior'
            major='Major: Economics, Minor: Spanish'
            bio='Janine is currently a UIUC senior studying economics and Spanish. As former social chair and treasurer of PSA, she is excited to finally be more involved with FACT as this year&apos;s co-hospitality chair. In her free time she enjoys embroidering for her friends, cooking pasta, and playing The Sims 4. She is looking forward to a fun FACT weekend with friends and fresh faces!'
            imageURL='/img/team/JaninePasquali.jpg'
          />
          <TeamMember 
            name='Francis Fabian'
            position='Hospitality'
            year='Junior'
            major='Economics and Philosophy'
            bio='Francis Fabian is a rising junior in Economics and Philosophy and one day hopes to be a lawyer. He feels a little bad about not being active in PSA over the pandemic and is excited to be working with FACT! Outside of PSA he enjoys watching anime and sitcoms, listening to K-pop girl groups, playing League of Legends, and running Dungeons and Dragons.'
            imageURL='/img/team/FrancisFabian.jpg'
          />
          <TeamMember 
            name='Melencio Sanidad'
            position='Conference Ambassador'
            year='Senior'
            major='Integrative Biology'
            bio='Melencio has been involved with PSA since Freshman year and was also a part of last year&apos;s FACT Pack as a Campus Ambassador. Other than being involved with PSA, he is also a member of Illini World Taekwondo. He is currently focusing on Entomology but is interested in a career with Wildlife Ecology as well. He is looking forward to helping host another great online FACT and hopes you&apos;re just as excited as him!'
            imageURL='/img/team/MelencioSanidad.jpg'
          />
          <TeamMember 
            name='Brion Nono'
            position='Conference Ambassador'
            year='Senior'
            major='Media and Cinema Studies'
            bio='Brion is senior studying in Media and Cinema Studies. Although he never has homework he will find a way to procrastinate till last minute. Brion enjoys watching anime, movies, and playing video games. He is the biggest S I M P for TWICE and for Eula from Genshin Impact. Catch him with all the memes at FACT this year!'
            imageURL='/img/team/BrionNono.jpg'
          />
          <Footer/>
        </Container>
      </Section.Body>
    </Section>
  </Layout>
)
export default TeamPage
