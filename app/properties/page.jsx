import Link from "next/link"
import React from "react"

const PropertyList = () => {
  return (
    <>
      <div className="text-3xl">PropertyList</div>
      <Link href="/" className="cursor-pointer">
        Go Home
      </Link>
    </>
  )
}

export default PropertyList
