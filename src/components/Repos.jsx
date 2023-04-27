import styled from "styled-components"
import { Bar3D, Column3D, Doughnut2D, ExampleChart, Pie3D } from "./Chart"
import { useContext } from "react"
import { GithubContext } from "../context/context"


const Repos = () => {
  const {repos} = useContext(GithubContext)
  // console.log(repos)

  let languages = repos.reduce((total, item) => {
    const { language } = item
    if(!language) return total
    if(!total[language]) total[language] = {label: language, value: 1}
    else total[language] = total[language] = {...total[language], value: total[language].value + 1}

    return total
  }, {})

  languages = Object.values(languages).sort((a,b) => b.value - a.value).slice(0,5)
  console.log(languages)

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
      <Pie3D data={languages} />
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