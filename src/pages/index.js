import * as React from "react";
import { FiMapPin } from "react-icons/fi";
import MainLayout from "../components/Layout";
import {SkillIcon} from "../components/Landing/SkillIcon";
import SEO from "../components/SEO";
import {Header} from "../components/Header";

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO title={'Bernard Nandwa | Web engineering mostly'}/>
      <div className={'w-full mx-auto flex flex-col min-h-screen'}>
        <Header/>
        <div className={'text-white pt-4 font-branding font-semibold w-full px-4 min-h-screen flex flex-col justify-center items-center'}>
          <div className={'w-full text-3xl md:text-5xl md:mx-auto md:max-w-5xl'}>Bernard Nandwa</div>
          <div className={'w-full flex text-xs mb-1 mt-0.5 md:mx-auto md:max-w-5xl'}>
            <span className={'mr-2'}><FiMapPin/></span>
            <span>Internet</span>
          </div>
          <div className={'text-sm font-normal md:text-base md:mx-auto md:max-w-5xl md:text-left'}>
            My work mostly revolving around NodeJS, PHP and a sprinkling of devops
          </div>
        </div>
        <div className={'bg-white p-4 w-full'}>
          <SkillIcon
            href={'https://www.credly.com/earner/earned/badge/cae1a166-a79d-44ff-a5ce-4a75f297382b'}
            iconURL={'https://images.credly.com/size/340x340/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png'}/>
        </div>
      </div>
    </MainLayout>
  )
}

export default IndexPage
