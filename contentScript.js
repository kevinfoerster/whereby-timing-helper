const handleInterval = () => {
    const nameWithVideo = [...document.querySelectorAll("[class^=controlsContent]")]
    const nameWhenMuted = [...document.querySelectorAll("[class^=displayNameLabel]")]

    const attributeName = 'initialTitle'
    const titleELement = document.querySelectorAll('title')[0]
    if (!titleELement.hasAttribute(attributeName)) {
        titleELement.setAttribute(attributeName, document.title)
    }
    const names = [...nameWithVideo, ...nameWhenMuted]
        .map(label => label.innerText)
        .sort()
        .filter(label => !label.includes('(you)'))

    const listOfNames = new Intl.ListFormat().format(names)
    document.title = titleELement.getAttribute(attributeName) + ' with ' + listOfNames
}


window.setInterval(handleInterval, 10000)