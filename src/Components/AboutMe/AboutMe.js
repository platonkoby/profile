import React from 'react'
import Content from '../Supports/Content'
import Section from '../Section'

function AboutMe() {
  
  return (
    <div className="about-me">
      <Content>
        <Section heading={'about me'} rows={2} columns={2}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad qui minus voluptate amet saepe deleniti. Similique rerum, deserunt voluptates sapiente neque nisi dignissimos magni quos quis dolore quisquam ea labore! Deleniti inventore impedit tenetur earum illo consectetur et accusamus atque pariatur iusto? Sapiente quae numquam et enim iure nam unde.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et perspiciatis illo molestias maxime assumenda necessitatibus consequatur accusamus nam omnis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique in, vitae perferendis quos dolor distinctio explicabo fuga nulla quae ratione, nihil necessitatibus porro voluptatum illum commodi eligendi ex error enim, autem consequatur ipsa fugiat dolorum! Corporis, architecto consequuntur repudiandae nesciunt, sequi totam est consectetur in labore, natus beatae porro!</p>
        </Section>
      </Content>
    </div>
  )
}

export default AboutMe