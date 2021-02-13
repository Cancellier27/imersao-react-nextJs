import React, { useState } from 'react'
import { useRouter } from 'next/router'

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizContainer from '../src/components/QuizContainer'
import Input from '../src/components/Input'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault()
              router.push(`/quiz?name=${name}`)
            }}
            >
              <Input onChange={(e) => setName(e.target.value)} />
              <button type="submit" disabled={!name.length}>
                jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>WoW Quiz</h1>

            <p>You dar enter in my realm? You are not prepared</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Cancellier27" />
    </QuizBackground>
  );
}
