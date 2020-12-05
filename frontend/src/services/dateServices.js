const humanizeDate = string => {
    const date = new Date(string)
    return date.toLocaleDateString('en-US')
}

export { humanizeDate }