import * as React from "react"
import MainLayout from "../components/Layout";
import {SkillIcon} from "../components/Landing/SkillIcon";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO title={'Bernard Nandwa | Web engineering mostly'}/>
      <div className={'w-full mx-auto flex flex-col md:flex-row min-h-screen'}>
        <div className={'text-white pt-4 text-2xl font-branding font-semibold w-full md:w-2/3 px-4'}>
          <div>Bernard Nandwa</div>
          <div>Web Engineering mostly</div>
        </div>
        <div className={'bg-white h-screen flex-grow p-4'}>
          <SkillIcon
            href={'https://www.credly.com/earner/earned/badge/cae1a166-a79d-44ff-a5ce-4a75f297382b'}
            iconURL={'https://images.credly.com/size/340x340/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png'}/>
        </div>
      </div>
    </MainLayout>
  )
}

export default IndexPage
