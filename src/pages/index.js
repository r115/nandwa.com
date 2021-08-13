import * as React from "react"
import MainLayout from "../components/Layout";

const IndexPage = () => {
  return (
    <MainLayout>
      <div className={'container mx-auto'}>
        <div className={'text-white pt-4 text-2xl font-branding font-semibold'}>
          <div>Bernard Nandwa</div>
          <div>Web Engineering mostly</div>
        </div>
      </div>
    </MainLayout>
  )
}

export default IndexPage
