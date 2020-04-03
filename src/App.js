import React from 'react'
import { Card } from './Card'

export const App = () => {
  return (
    <main>
      <Card
        buttonText="ORDER NOW"
        buttonTextColor="#000000"
        buttonColor="#FCED84"
        emoji="🍋"
        primary="#8CFFBA"
        secondary="#CFFFE2"
        subtitle="This is a really tasty fruit."
        subtitleColor="#000000"
        title="Lemon"
        titleColor="#166F39"
      />
      <Card
        buttonText="I LIKE IT"
        buttonTextColor="#fff"
        buttonColor="#006cff"
        emoji="💙"
        primary="pink"
        secondary="#f1ced3"
        subtitle="Monday - What a lovely day!"
        subtitleColor="#fff"
        title="Today"
        titleColor="#006cff"
      />
      <Card
        buttonText="ADOPT ME"
        buttonTextColor="#502F7E"
        buttonColor="#fff"
        emoji="🐶"
        primary="#EEB200"
        secondary="#FFE086"
        subtitle="Hello, wanna be friends?"
        subtitleColor="#502F7E"
        title="Doggy"
        titleColor="#502F7E"
      />
    </main>

  )
}
