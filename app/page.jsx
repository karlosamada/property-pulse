import React from "react"
import { Hero, InfoBox } from "@/components"
import Link from "next/link"

const MainPage = () => {
  return (
    <>
      <Hero />
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox
              heading="For Property Owners"
              buttonInfo={{
                text: "Browse Properties",
                link: "/properties/add",
                backgroundColor: "bg-blue-500",
              }}
            >
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </InfoBox>
            <InfoBox
              heading="For Renters"
              backgroundColor="bg-blue-100"
              buttonInfo={{
                text: "Browse Properties",
                link: "/properties",
                backgroundColor: "bg-black",
              }}
            >
              Find your dream rental property. Bookmark properties and contact
              owners.
            </InfoBox>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainPage
