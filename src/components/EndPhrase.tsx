import React from 'react'

function EndPhrase({ textColorClass, children }: { textColorClass: string, children: string }) {
  return (
    <h2 className={"py-10 text-3xl lg:text-4xl font-bold text-center " + textColorClass}>&quot;{ children }&quot;</h2>
  )
}

export default EndPhrase