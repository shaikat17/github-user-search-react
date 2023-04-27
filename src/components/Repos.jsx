import styled from "styled-components"
import { Bar3D, Column3D, Doughnut2D, ExampleChart, Pie3D } from "./Chart"
import { useContext } from "react"
import { GithubContext } from "../context/context"


const Repos = () => {
  const {repos} = useContext(GithubContext)
  // console.log(repos)

  // calculating an object of total number of language
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if(!language) return total
    if(!total[language]) total[language] = {label: language, value: 1, stars: stargazers_count}
    else total[language] = total[language] = {...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count}

    return total
  }, {})

  // sorting data - highest to lowest and slice data 
  const mostUsedLanguage = Object.values(languages).sort((a,b) => b.value - a.value).slice(0,5)

  const mostPopular = Object.values(languages).sort((a,b) => b.stars - a.stars).map( item => {
    return {...item, value: item.stars}
  }).slice(0,5)

  const chartData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      Value: '160',
    },
    {
      label: 'Javascript',
      value: '80'
    }
  ]

  return (
    <section className="section">
      <Wrapper className="section-center">
      {/* <ExampleChart /> */}
      <Pie3D data={mostUsedLanguage} />
      <div></div>
      <Doughnut2D data={mostPopular} />
      <div></div>
      </Wrapper>
    </section>
  )
}

export default Repos

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;