import React from 'react'

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizContainer from '../src/components/QuizContainer'
import Input from '../src/components/Input'

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form action="">
              <Input type="text" />
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
  )
}
