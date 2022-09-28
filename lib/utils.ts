const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export const formatDateFrom = (date?: string) =>
  new Date(date).toLocaleDateString('en-GB', dateOptions)

export const todayFormattedDate = () =>
  new Date().toLocaleDateString('en-GB', dateOptions)

/**
 * Replaces all interactive links with an iframe
 * @param html - the body html string
 * @returns the body html string with replaced content
 */
export const replaceInteractiveContent = (html: string) => {
  let parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  var interactiveTags: any = doc.getElementsByClassName('interactive')

  for (let index = 0; index < interactiveTags.length; index++) {
    const newIframe = document.createElement('iframe')
    newIframe.className = 'interactive'
    newIframe.src = interactiveTags[index].children[0].href
    newIframe.height = '100%'
    interactiveTags[index].replaceWith(newIframe)
  }

  return new XMLSerializer().serializeToString(doc)
}
